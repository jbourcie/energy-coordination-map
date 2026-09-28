const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const data=JSON.parse(fs.readFileSync(path.join(__dirname,'../docs/data/map.json'),'utf8'));
const ids=data.groups.flatMap(g=>g.ids);
assert.equal(ids.length,new Set(ids).size,'Concept présent dans plusieurs branches');
assert.deepEqual([...ids].sort(),Object.keys(data.nodes).sort(),'Concept orphelin ou inconnu');
for(const [id,n] of Object.entries(data.nodes)){
 assert.ok(n.name,`Nom manquant : ${id}`);
 for(const a of n.attrs)assert.ok(a.length===2&&a.every(v=>typeof v==='string'),`Attribut incorrect : ${id}`);
 assert.equal(n.explanations.length,n.attrs.length,`Explications incomplètes : ${id}`);
 for(const [i,x] of n.explanations.entries()){
  assert.equal(x.attribute,n.attrs[i][0]);
  assert.ok(x.question&&x.combination&&x.implication&&x.options.length,`Dimension non expliquée : ${id}`);
  for(const o of x.options)assert.ok(o.label&&o.definition&&o.example,`Alternative non expliquée : ${id}`);
 }
 for(const [verb,target] of n.rels)assert.ok(verb&&data.nodes[target],`Lien inconnu : ${id} → ${target}`);
 for(const [ref,note] of n.refs)assert.ok(data.refs[ref]&&note,`Référence inconnue : ${id} → ${ref}`);
}
for(const r of Object.values(data.refs)){
 assert.ok(r.title&&r.name&&r.status);
 assert.equal(new URL(r.url).protocol,'https:');
}
console.log(`${ids.length} concepts et ${Object.keys(data.refs).length} articles : structure valide.`);
