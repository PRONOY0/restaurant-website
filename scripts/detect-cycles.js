const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', 'src');

function getFiles(dir){
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for(const item of items){
    const full = path.join(dir, item.name);
    if(item.isDirectory()) results.push(...getFiles(full));
    else if(/\.jsx?$/.test(item.name)) results.push(full);
  }
  return results;
}

const files = getFiles(SRC);
const imports = new Map();

files.forEach(f => {
  const src = fs.readFileSync(f, 'utf8');
  const re = /import\s+([\s\S]+?)\s+from\s+['"](.+?)['"]/g;
  let m;
  imports.set(f, []);
  while((m = re.exec(src))){
    imports.get(f).push(m[2]);
  }
});

// Resolve import paths to absolute file paths where possible
function resolveImport(from, imp){
  if(imp.startsWith('.') ){
    // try .js/.jsx/index
    let base = path.resolve(path.dirname(from), imp);
    const candidates = [base, base + '.js', base + '.jsx', path.join(base, 'index.js'), path.join(base, 'index.jsx')];
    for(const c of candidates){
      if(fs.existsSync(c)) return path.normalize(c);
    }
  }
  return null;
}

const graph = new Map();
for(const [f, imps] of imports.entries()){
  graph.set(f, []);
  imps.forEach(imp => {
    const r = resolveImport(f, imp);
    if(r) graph.get(f).push(r);
  });
}

// detect cycles using DFS
const visited = new Set();
const stack = new Set();
const cycles = [];

function dfs(node, pathSoFar){
  if(stack.has(node)){
    const idx = pathSoFar.indexOf(node);
    cycles.push(pathSoFar.slice(idx).concat(node));
    return;
  }
  if(visited.has(node)) return;
  visited.add(node);
  stack.add(node);
  const neighbors = graph.get(node) || [];
  for(const n of neighbors) dfs(n, pathSoFar.concat(n));
  stack.delete(node);
}

for(const n of graph.keys()) dfs(n, [n]);

if(cycles.length === 0) console.log('No cycles found.');
else{
  console.log('Cycles found:');
  cycles.forEach(c => console.log(c.join(' -> ')));
}
