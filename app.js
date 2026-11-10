/* TigerTown Evaluations app. Standards come from the October 2026 Smart Shop reports (2385848 Tue dinner, 2217851 Fri afternoon). */

/* ===== Evaluations =====
   Each item: [id code, standard, scored (1) or unscored (0), what "No" means, Smart Shop miss ('Tue', 'Fri' or 'Tue & Fri')] */
var EVALS = {
ipos:{t:'IPOS (Drive-thru)',short:'IPOS',d:'Order taker standards. One team member per sheet.',person:true,pre:'dt',secs:[
{k:'ipos',t:'IPOS',items:[
['2.01.2','At least one team member available to take orders in the queue at all times',0,'No team member available'],
['2.01.31','Conversations between team members stop when the guest approaches',1,'Team members kept talking'],
['2.010.20','Team member offers a warm welcome',1,'No warm welcome'],
['2.010.2','Order taker makes eye contact with the guest',1,'No eye contact'],
['2.010.3','Order taker shares a smile',1,'No smile'],
['2.010.4','Order taker speaks with a friendly tone of voice',1,'Tone not friendly'],
['2.09.1','Silver (or embroidered) name tag visible on right chest',1,'Name tag not visible'],
['2.02.2','Yellow Hi-Vis reflective safety wear with 360-degree coverage worn',0,'Hi-Vis wear not worn'],
['2.03.4','Handheld menu available when menu boards aren’t clearly visible',1,'Not visible on team member and not offered','Tue'],
['2.03.2','Team member proactively asks for sauce choice',1,'Did not proactively ask for sauce','Tue'],
['2.03.3','Order confirmed in its entirety',1,'Order not confirmed in full'],
['Store','Order taker asks “May I have your name for the order, please?”',1,'Did not use that wording (note what was said, if anything)'],
['2.010.35','Order taker uses guest’s name in a sentence',1,'Did not use guest’s name','Tue'],
['2.010.5','Order taker says “My Pleasure” when thanked',1,'Other response or none','Tue'],
['2.010.40','Order taker gives clear verbal direction',1,'No clear verbal direction','Tue'],
['2.010.21','Order taker offers a fond farewell',1,'No fond farewell','Tue']]}]},

co:{t:'Carry Out & Facilities',short:'Carry Out & Facilities',d:'Front counter, dining room, restrooms and outside.',person:false,pre:'co',secs:[
{k:'co',t:'Carry Out',items:[
['2.01.2','At least one team member available to take orders in the queue at all times',0,'No team member available'],
['2.01.31','Conversations between team members stop when the guest approaches the counter or queue',1,'Team members kept talking'],
['2.010.20','Team member offers a warm welcome',1,'No warm welcome'],
['2.010.2','Order taker makes eye contact with the guest',1,'No eye contact'],
['2.010.3','Order taker shares a smile',1,'No smile'],
['2.010.4','Order taker speaks with a friendly tone of voice',1,'Tone not friendly'],
['2.03.2','Team member asks for the guest’s choice of sauce(s)',1,'Did not proactively ask for sauce'],
['2.03.3','Order taker confirms the order in its entirety',1,'Order not confirmed in full','Tue'],
['2.010.35','Order taker uses guest’s name in a sentence',1,'Did not use guest’s name','Tue'],
['2.010.5','Order taker says “My Pleasure” when thanked',1,'Other response or none','Tue & Fri'],
['2.05.1','Team member attempts meal delivery before staging on the pickup shelf or counter',1,'Meal staged without trying to deliver'],
['2.05.6','Meal delivery team member confirms order with a stated menu item',0,'Did not confirm with a menu item'],
['2.010.26','Meal delivery team member makes eye contact with the guest',1,'No eye contact'],
['2.010.31','Meal delivery team member shares a smile',1,'No smile'],
['2.010.27','Meal delivery team member speaks with a friendly tone of voice',1,'Tone not friendly'],
['2.010.36','Meal delivery team member uses guest’s name in a sentence',1,'Did not use guest’s name','Tue & Fri'],
['2.010.28','Meal delivery team member says “My Pleasure” when thanked',1,'Other response or none','Tue'],
['2.010.40','Clear verbal direction from order taker and/or meal delivery',1,'No clear verbal direction','Tue'],
['2.010.21','Team member offers a fond farewell',1,'No fond farewell'],
['2.010.41','Positive impact with words (encourage, appreciate, compliment)',0,'None provided'],
['2.010.43','Surprise and Delight received / observed',0,'None observed'],
['2.04.10','Food is served correctly',1,'Food item wrong or missing'],
['2.04.2','Sauce(s) served correctly',1,'Sauce wrong or missing'],
['2.04.7','Meal served with a straw and at least two napkins',1,'Straw or napkins missing'],
['4.01.11','Guest receives a payment receipt',1,'No receipt'],
['2.09.1','Silver (or embroidered) name tag visible on right chest (all staff)',1,'Name tag not visible'],
['2.09.8','All team members wearing CFA TeamStyle polos',0,'Not in TeamStyle polo'],
['2.09.2','Polo tucked in and TeamStyle belt worn (excluding team members who may be pregnant)',0,'Not tucked in or no belt'],
['2.09.5','If present, outerwear is CFA TeamStyle',0,'Outerwear not TeamStyle'],
['2.09.6','TeamStyle pants, skirts or shorts (excluding restaurant leaders)',0,'Not TeamStyle bottoms'],
['2.09.4','Cleanly shaven, or facial hair short and neatly groomed (up to 1/2 inch)',0,'Facial hair not groomed'],
['2.02.1','Black slip-resistant shoes on all team members inside (excluding leadership)',0,'Not wearing slip-resistant shoes']]},
{k:'int',t:'Internal facilities',items:[
['2.06.7','All menu board lights are on',1,'Menu board light out'],
['2.05.3','Table marker given if the meal isn’t ready by the end of the counter transaction',1,'No table marker'],
['2.05.2','Dine-in tray used for delivering meal to guest',1,'No tray used'],
['2.01.1','At least one highchair in the dining room',1,'No highchair'],
['2.010.42','Team member serving proactively in the dining room',0,'Not observed'],
['2.01.3','Condiment stations stocked with high-usage items (napkins, ketchup, mayo, straws, forks)',1,'Condiment station not stocked'],
['2.06.10','Dining room trash receptacles not overfull or overflowing',1,'Dining room trash overflowing'],
['2.06.2','All overhead lighting on in the dining room (including pendants)',1,'Dining room light out'],
['2.06.9','All overhead lighting on in the restroom',1,'Restroom light out'],
['2.06.6','Baby changing table clean and in good condition',1,'Changing table dirty or damaged'],
['2.06.12','Toilet paper available in the restroom stall',1,'No toilet paper'],
['2.06.5','Hand soap dispenser stocked and dispensing in the restroom',1,'No soap'],
['2.06.8','Paper towels stocked and operating in the restroom',1,'No paper towels'],
['2.06.14','Restroom trash receptacles not overfull or overflowing',1,'At least one trash can overflowing','Fri']]},
{k:'ext',t:'External facilities',items:[
['2.08.18','Dumpster gate closed (when not in use)',1,'Dumpster gate open'],
['2.08.19','Dumpster lid closed (when not in use)',1,'Dumpster lid open'],
['2.08.20','National flag in good condition (no fading, wear, tears or frayed edges)',1,'Flag worn or damaged'],
['2.08.17','Back door kept closed (when not in use)',1,'Back door open']]}]},

boh:{t:'Back of House',short:'Back of House',d:'Food quality and packaging checks.',person:false,pre:'boh',secs:[
{k:'fry',t:'Waffle Potato Fries',items:[
['1.03.7','Fry package appears full (see Quality Photo)',1,'Visually not full / underfilled','Fri'],
['3.01.5','Outside of fry packaging free of staining larger than a nickel',0,'Packaging stained'],
['1.03.5','Fries evenly cooked (crisp outside, soft inside), not scorched or soggy',1,'Not evenly cooked'],
['1.03.13','Fries free from excessive clumping (3+ fries stuck together)',0,'Excessive clumping'],
['1.03.6','Fries meet color requirements (see Quality Photo)',1,'Color off']]},
{k:'grl',t:'Grilled Chicken Sandwich',items:[
['1.04.2','Clamshell securely closed with both locking tabs, product not sticking out',1,'Locking tabs not secured','Tue'],
['1.04.12','Outside of clamshell free of staining larger than a quarter',1,'Clamshell stained'],
['1.04.4','Served in a sandwich sleeve inside the clamshell',1,'Sleeve not present','Tue'],
['1.04.11','Multigrain brioche bun not torn, crushed, flaking or peeling',1,'Bun damaged'],
['1.04.9','Bun crown (top) toasted evenly to correct color',1,'Crown toast off'],
['1.04.3','Grilled filet correct color, best grill marks side (see Quality Photos)',1,'Filet color off'],
['1.04.1','Best grill marks facing up',1,'Best grill marks facing down','Tue'],
['1.04.6','Grilled filet free of carbon buildup (both sides)',1,'Excess carbon buildup','Tue'],
['1.04.17','2 whole tomato slices',1,'Not 2 whole slices'],
['1.04.27','Tomato slices 2.5" to 2.75" in diameter',0,'Wrong size'],
['1.04.18','Tomato slices meet color requirements',0,'Color off'],
['1.04.19','Tomato slices intact, acceptable core, no end slices',1,'Tomato slice not acceptable'],
['1.04.16','2 Green Leaf lettuce leaves on the sandwich',1,'Fewer than 2 leaves','Tue & Fri'],
['1.04.8','Lettuce leaves about 4" across (+/- 0.5)',0,'Leaf smaller than 3.5" or larger than 4.5"'],
['1.04.5','Grilled filet has acceptable bun coverage',1,'Bun coverage off'],
['1.04.10','Bun heel (bottom) toasted evenly to correct color',1,'Heel toast off']]},
{k:'cfa',t:'Chick-fil-A Chicken Sandwich',items:[
['1.01.4','Outside of packaging free of staining larger than a quarter',1,'Packaging stained'],
['1.01.12','Foil bag top has two straight 1/2" folds (+/- 1/8") to close it',1,'Bag folds wrong'],
['1.01.19','White bun not torn or crushed, no flaking or peeling',1,'Bun damaged'],
['1.01.22','Bun crown and heel buttered with butter-flavored oil',1,'Not buttered'],
['1.01.17','Bun crown (top) toasted evenly to correct color',1,'Crown toast off'],
['1.01.1','Filet has acceptable bun coverage (see Quality Photo)',1,'Bun coverage not acceptable','Tue'],
['1.01.2','Filet golden brown, side facing up (see Quality Photo)',1,'Too dark or too light','Tue'],
['1.01.13','Bare spots on filet no larger than a quarter (both sides)',1,'Bare spots too large'],
['1.01.10','Filet covered in a generous layer of coater, no large lumps or uncooked coater',1,'Chunky / excessive coater lumps','Tue'],
['1.01.11','2 well-drained pickle chips (3 if small, under 1.25")',1,'Wrong pickle count'],
['1.01.6','Pickles not hanging off the bun heel',1,'Pickles hanging off'],
['1.01.7','Pickles overlap by no more than a quarter of pickle area',1,'Pickles overlap too much','Fri'],
['1.01.18','Bun heel (bottom) toasted evenly to correct color',1,'Heel toast off']]},
{k:'nug',t:'Nuggets (8-count)',items:[
['1.02.7','Outside of box free of staining larger than a nickel',1,'Box stained','Tue'],
['1.02.2','Nugget box "N" tab pressed',1,'Tab not pressed'],
['1.02.15','8 nuggets in the 8-count box',1,'Wrong count'],
['1.02.13','No scraps in the box',1,'Scraps in box'],
['1.02.3','Nuggets covered in a generous layer of coater, no large lumps or uncooked coater',1,'Chunky / excessive coater lumps','Tue'],
['1.02.5','Nuggets meet color requirements',1,'Color off'],
['1.02.4','Nuggets free of bare spots larger than a dime',1,'Bare spots too large']]}]}
};
EVALS.shop={t:'Secret Shopper (Drive-thru)',short:'Secret Shopper',d:'Thank you for helping make our team better!',person:true,anon:true,locked:true,pre:'ss',secs:EVALS.ipos.secs};
var ORDER=['ipos','co','boh','shop'];
var SS_LEGEND='= non-compliant on an October Smart Shop (Tue = Tuesday dinner, Fri = Friday afternoon).';
var APP='TigerTown Evaluations';
function EV(t){return EVALS[t]||EVALS.ipos}
function iid(type,it){return EV(type).pre+'|'+it[0]}
function allItems(type){var a=[];EV(type).secs.forEach(function(x){x.items.forEach(function(it){a.push({sec:x,it:it,id:iid(type,it)})})});return a}
function ssTag(it){return it[4]?'<span class="tag ss">Missed on Smart Shop · '+it[4]+'</span>':''}
function ssTxt(it){return it[4]?' [Missed on Smart Shop: '+it[4]+']':''}

/* ===== Helpers ===== */
function $(i){return document.getElementById(i)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function today(){var d=new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
function partNow(){var d=new Date(),m=d.getHours()*60+d.getMinutes();return m<630?'Breakfast':m<840?'Lunch':m<1020?'Afternoon':'Dinner'}
function dayName(d){try{return new Date(d+'T12:00:00').toLocaleDateString('en-US',{weekday:'long'})}catch(e){return''}}
function fmtDate(d){if(!d)return'';try{return new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}catch(e){return d}}
function newId(){return 's'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function obj(o){return o&&typeof o==='object'&&!Array.isArray(o)?o:{}}
function str(v,max){return typeof v==='string'?v.slice(0,max||500):''}
function norm(id,d){d=obj(d);var a={},n={},A=obj(d.a),N=obj(d.n);
  Object.keys(A).forEach(function(k){if(A[k]==='y'||A[k]==='n'||A[k]==='na')a[k]=A[k]});
  Object.keys(N).forEach(function(k){var v=str(N[k],2000);if(v)n[k]=v});
  var type=EVALS[d.type]?d.type:'ipos';
  return{id:id,type:type,member:str(d.member,120),by:str(d.by,120),rest:str(d.rest,120),date:str(d.date,10),part:str(d.part,20)||'Lunch',gen:str(d.gen,4000),a:a,n:n,submitted:+d.submitted||0,created:+d.created||0,updated:+d.updated||0}}
function score(s){var r={Y:0,N:0,sec:{}};EV(s.type).secs.forEach(function(sec){var y=0,n=0;sec.items.forEach(function(it){if(!it[2])return;var v=s.a[iid(s.type,it)];if(v==='y')y++;else if(v==='n')n++});r.sec[sec.k]={y:y,n:n};r.Y+=y;r.N+=n});r.pct=r.Y+r.N?Math.round(r.Y/(r.Y+r.N)*100):null;return r}
function answered(s){return Object.keys(s.a).length>0}
function toast(t){var d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2600)}
function slug(s){return String(s||'').trim().replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'')||'sheet'}
function who(s){var e=EV(s.type);if(e.anon)return 'Secret shopper'+(s.member?' · '+s.member:'');return e.person?(s.member||'No name yet'):(s.by?'by '+s.by:'No evaluator yet')}

/* ===== Storage (this device) ===== */
var KEY='ipos_eval_v1',L={sheets:{},cur:null,mine:{},dirty:{},dels:{},key:'',sid:'',spw:'',mpw:'',lastSync:0},storeOk=true;
function lload(){try{var r=localStorage.getItem(KEY);if(r){var p=JSON.parse(r);Object.keys(obj(p.sheets)).forEach(function(k){L.sheets[k]=norm(k,p.sheets[k])});L.cur=p.cur||null;L.mine=obj(p.mine);L.dirty=obj(p.dirty);L.dels=obj(p.dels);L.key=str(p.key,200);L.sid=str(p.sid,200);L.spw=str(p.spw,200);L.mpw=str(p.mpw,200);L.lastSync=+p.lastSync||0}}catch(e){storeOk=false}}
function lsave(){try{localStorage.setItem(KEY,JSON.stringify(L));if(!storeOk){storeOk=true;setStatus()}}catch(e){storeOk=false;setStatus()}}
function setStatus(){var el=$('status'),n=Object.keys(L.sheets).filter(function(k){return answered(L.sheets[k])}).length;
  if(!storeOk){el.className='status warn';el.innerHTML='<b>Not saving</b> · this browser is blocking storage. Open the app from the Home Screen icon.';return}
  var tip=standalone()?'':' · tip: Share → Add to Home Screen';
  if(!syncOn()){var any=!!(syncUrl()||L.key);el.className='status'+(any?' warn':'');el.innerHTML=any?'<b>Not connected</b> · saved on this device only. Open the pinned GroupMe link to connect.'+tip:'<b>Saved on this device</b> · '+n+' evaluation'+(n===1?'':'s')+tip;return}
  var w=Object.keys(L.dirty).length+Object.keys(L.dels).length;
  if(syncErr==='bad_key'){el.className='status warn';el.innerHTML='<b>Wrong access key</b> · open the pinned GroupMe link again.';return}
  if(w||syncErr){el.className='status warn';el.innerHTML='<b>'+(syncing?'Syncing…':navigator.onLine===false?'Offline':'Not synced yet')+'</b> · '+w+' change'+(w===1?'':'s')+' waiting. Saved on this device, will send when online.'+tip;return}
  el.className='status';el.innerHTML='<b>'+(syncing?'Syncing…':'Synced')+'</b> · '+n+' evaluation'+(n===1?'':'s')+' in the shared sheet'+(L.lastSync?' · last check '+new Date(L.lastSync).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'}):'')+tip}
function standalone(){return (window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true}
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}

/* ===== Home (pick an evaluation) ===== */
var sh=null,view='home';
function all(){return Object.keys(L.sheets).map(function(k){return L.sheets[k]})}
function mine(){return Object.keys(L.sheets).filter(function(k){return L.mine[k]&&L.sheets[k]}).map(function(k){return L.sheets[k]})}
function renderHome(){
  $('pickers').innerHTML=ORDER.map(function(t,i){var e=EVALS[t];return'<button class="'+(i===0?'primary':'')+'" data-new="'+t+'"><b>'+(e.locked?(L.spw?'🔓 ':'🔒 '):'')+esc(e.t)+'</b><span>'+esc(e.d)+'</span></button>'}).join('');
  $('relock').hidden=!L.spw;
  var M=mine().filter(function(s){return answered(s)||s.member||s.gen}).sort(function(a,b){return b.updated-a.updated}).slice(0,15);
  $('recentcard').hidden=!M.length;
  $('recent').innerHTML=M.map(function(s){var r=score(s);return'<button data-open="'+esc(s.id)+'"><b>'+esc(EV(s.type).short)+'</b> · '+esc(who(s))+'<small>'+esc(fmtDate(s.date)+' · '+s.part+' · '+(r.pct==null?'not scored yet':r.pct+'%'))+'</small></button>'}).join('')}
$('pickers').addEventListener('click',function(e){var b=e.target.closest('button[data-new]');if(!b)return;var t=b.dataset.new;
  if(EV(t).locked&&!L.spw){$('lockcard').hidden=false;$('pw_err').textContent='';$('pw_in').value='';$('pw_in').focus();$('lockcard').scrollIntoView({block:'center'});return}
  add(t)});
$('pw_go').onclick=function(){var pw=$('pw_in').value;if(!pw)return;
  if(!syncOn()){$('pw_err').textContent='This device isn’t connected. Open the pinned GroupMe link first.';return}
  if(navigator.onLine===false){$('pw_err').textContent='You need to be online to unlock.';return}
  var b=this;b.disabled=true;$('pw_err').textContent='Checking…';
  fetch(SYNC_URL+(SYNC_URL.indexOf('?')<0?'?':'&')+'action=spw&k='+encodeURIComponent(L.key)+'&pw='+encodeURIComponent(pw)+'&t='+Date.now(),{cache:'no-store',redirect:'follow'}).then(function(r){return r.json()}).then(function(r){b.disabled=false;
    if(r&&r.ok&&r.shop){L.spw=pw;lsave();$('lockcard').hidden=true;$('pw_in').value='';add('shop')}
    else $('pw_err').textContent=(r&&r.error==='bad_key')?'Wrong access key. Open the pinned GroupMe link again.':'Wrong password.'},
  function(){b.disabled=false;$('pw_err').textContent='Couldn’t reach the server. Try again.'})};
$('pw_in').addEventListener('keydown',function(e){if(e.key==='Enter')$('pw_go').click()});
$('pw_cancel').onclick=function(){$('lockcard').hidden=true};
$('relock').onclick=function(){if(Object.keys(L.dirty).some(function(k){return L.sheets[k]&&L.sheets[k].type==='shop'})){toast('Wait until your Secret Shopper sheet has synced, then lock.');return}
  L.spw='';lsave();renderHome();toast('Secret Shopper is locked on this device.')};
$('recent').addEventListener('click',function(e){var b=e.target.closest('button[data-open]');if(b&&pick(b.dataset.open)!==false)go('sheet')});
$('back').onclick=function(){go('home')};

/* ===== Sheet view ===== */
function blank(type){var last=mine().sort(function(a,b){return b.updated-a.updated})[0]||{};var t=Date.now();return{id:newId(),type:type,member:'',by:EV(type).anon?'Secret shopper':(last.by||''),rest:last.rest||'',date:today(),part:partNow(),gen:'',a:{},n:{},created:t,updated:t}}
function lists(){var m={},e={};all().forEach(function(s){if(s.member)m[s.member.trim()]=1;if(s.by)e[s.by.trim()]=1});
  $('memberlist').innerHTML=Object.keys(m).sort().map(function(x){return'<option value="'+esc(x)+'">'}).join('');
  $('evallist').innerHTML=Object.keys(e).sort().map(function(x){return'<option value="'+esc(x)+'">'}).join('')}
function renderFields(){var e=EV(sh.type);renderSubmit();$('evtitle').textContent=e.t;$('memberrow').hidden=!e.person;$('byrow').hidden=!!e.anon;$('memberlbl').firstChild.textContent=e.anon?'Team member (from name tag, optional)':'Team member being evaluated';
  $('f_member').value=sh.member;$('f_by').value=sh.by;$('f_date').value=sh.date;$('f_part').value=sh.part;$('f_gen').value=sh.gen;$('out').hidden=true;needName();lists()}
function needName(){var e=EV(sh.type);$('f_member').classList.toggle('need',e.person&&!e.anon&&!sh.member.trim());$('f_by').classList.toggle('need',!e.anon&&!sh.by.trim());
  if(e.anon){$('barwho').textContent='Secret shopper · '+(sh.member.trim()?sh.member+' · ':'')+sh.part;return}
  $('barwho').textContent=e.person?(sh.member.trim()?sh.member+' · '+sh.part:'Enter the team member’s name'):(sh.by.trim()?e.short+' · '+sh.part:'Enter your name')}
function renderItems(){var h='',T=sh.type;
  EV(T).secs.forEach(function(sec,si){h+='<h2>'+esc(sec.t)+'<small id="sc_'+sec.k+'"></small></h2>';
    if(si===0)h+='<p class="legend"><span class="tag ss" style="margin:0 4px 0 0">Missed on Smart Shop</span> '+esc(SS_LEGEND)+'</p>';
    sec.items.forEach(function(it){var id=iid(T,it),v=sh.a[id]||'';
      h+='<div class="item '+v+'" data-id="'+esc(id)+'"><div class="q">'+esc(it[1])+(it[2]?'':'<span class="tag">Unscored</span>')+ssTag(it)+'</div><div class="meta">'+esc(it[0])+'</div>'+
      '<div class="opts">'+[['y','Yes'],['n','No'],['na','N/A']].map(function(o){return'<button class="'+o[0]+(v===o[0]?' on':'')+'" data-v="'+o[0]+'">'+o[1]+'</button>'}).join('')+'</div>'+
      '<div class="hint"'+(v==='n'?'':' hidden')+'>If No: '+esc(it[3])+'</div>'+
      '<div class="note"'+(v==='n'||sh.n[id]?'':' hidden')+'><textarea placeholder="Notes (optional)" data-note="'+esc(id)+'">'+esc(sh.n[id]||'')+'</textarea></div></div>'})});
  $('sections').innerHTML=h;scores()}
function scores(){var r=score(sh),tot=0,ans=0;
  EV(sh.type).secs.forEach(function(sec){var c=r.sec[sec.k];$('sc_'+sec.k).textContent=c.y+' compliant · '+c.n+' non-compliant';sec.items.forEach(function(it){if(it[2]){tot++;if(sh.a[iid(sh.type,it)])ans++}})});
  $('pct').textContent=r.pct==null?'–':r.pct+'%';
  $('chips').innerHTML='<span><b>'+r.Y+'</b> compliant</span><span><b>'+r.N+'</b> non-compliant</span><span><b>'+ans+'</b> of '+tot+' scored answered</span>'}
function touch(){if(sh.submitted){toast('This sheet was submitted and can’t be changed.');return}sh.updated=Date.now();L.dirty[sh.id]=1;lsave();setStatus();queueSync()}
function pick(id){if(!L.sheets[id])return;if(L.sheets[id].type==='shop'&&!L.spw){toast('Secret Shopper sheets need the password.');return false}L.cur=id;sh=L.sheets[id];L.mine[id]=1;lsave();renderFields();renderItems()}
function add(type){if(EV(type).locked&&!L.spw)return;var s=blank(type);L.sheets[s.id]=s;L.mine[s.id]=1;lsave();pick(s.id);go('sheet');(EV(type).person?$('f_member'):$('f_by')).focus();return s}
function summary(s){var e=EV(s.type),r=score(s),t=e.t+' evaluation\n'+(e.person?'Team member: '+(s.member||'—')+'\n':'')+(e.anon?'Secret shopper evaluation':'Evaluator: '+(s.by||'—'))+'\n'+dayName(s.date)+' '+fmtDate(s.date)+' · '+s.part+'\n\n';
  e.secs.forEach(function(sec){var c=r.sec[sec.k];t+=sec.t+': '+c.y+' compliant, '+c.n+' non-compliant\n';
    sec.items.forEach(function(it){var id=iid(s.type,it);if(s.a[id]==='n')t+='  ✗ '+it[0]+' '+it[1]+(it[2]?'':' (unscored)')+' – '+it[3]+(s.n[id]?' | Note: '+s.n[id]:'')+'\n'})});
  t+='\nOverall: '+(r.pct==null?'–':r.pct+'%')+' ('+r.Y+' of '+(r.Y+r.N)+' scored items compliant)\n';if(s.gen)t+='\nComments: '+s.gen+'\n';return t}

var armed=false,dtm;
function rst(){armed=false;clearTimeout(dtm);$('del').classList.remove('armed');$('del').textContent='Delete sheet'}
$('del').onclick=function(){if(sh&&sh.submitted){toast('Submitted sheets can’t be deleted here.');return}if(!armed){armed=true;this.classList.add('armed');this.textContent='Tap again to delete';dtm=setTimeout(rst,3000);return}
  rst();var did=sh.id;delete L.sheets[did];delete L.mine[did];delete L.dirty[did];if(syncOn())L.dels[did]=1;L.cur=null;sh=null;lsave();queueSync();setStatus();go('home');toast('Sheet deleted.')};
[['f_member','member'],['f_by','by'],['f_date','date'],['f_part','part'],['f_gen','gen']].forEach(function(p){
  $(p[0]).addEventListener(p[0]==='f_part'?'change':'input',function(){sh[p[1]]=this.value;touch();if(p[1]!=='gen')needName()})});
$('sections').addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b||sh.submitted)return;
  var row=b.closest('.item'),id=row.dataset.id,v=b.dataset.v;if(sh.a[id]===v)v='';
  if(v)sh.a[id]=v;else delete sh.a[id];touch();
  row.className='item '+v;row.querySelectorAll('.opts button').forEach(function(x){x.classList.toggle('on',x.dataset.v===v)});
  row.querySelector('.hint').hidden=v!=='n';row.querySelector('.note').hidden=!(v==='n'||sh.n[id]);scores()});
$('sections').addEventListener('input',function(e){var id=e.target.dataset.note;if(!id)return;if(e.target.value)sh.n[id]=e.target.value;else delete sh.n[id];touch()});
$('sum').onclick=function(){var o=$('out'),t=summary(sh),b=this;o.value=t;o.hidden=false;
  try{navigator.clipboard.writeText(t).then(function(){b.textContent='Copied ✓';setTimeout(function(){b.textContent='Copy summary'},2000)},function(){o.focus();o.select()})}catch(e){o.focus();o.select()}};
var clr=false;
$('reset').onclick=function(){var b=this;if(!clr){clr=true;b.textContent='Tap again to clear';setTimeout(function(){clr=false;b.textContent='Clear answers'},3000);return}
  clr=false;b.textContent='Clear answers';sh.a={};sh.n={};touch();renderItems()};

/* ===== Secret Shopper submit ===== */
function renderSubmit(){var shop=sh.type==='shop',done=!!sh.submitted;
  $('submit').hidden=!shop||done;$('subcard').hidden=!shop;$('v_sheet').classList.toggle('locked',done);
  $('del').hidden=done;$('reset').hidden=done;
  if(shop)$('substate').innerHTML=done?'<b style="color:var(--ok)">Submitted '+esc(new Date(sh.submitted).toLocaleString('en-US'))+'.</b> Sent to the store. This sheet is final.':'When you finish, tap <b>Submit to store</b> at the bottom. Results go to the store by email, and the sheet is then final.'}
var subArmed=false;
$('submit').onclick=function(){var b=this;
  if(!answered(sh)){toast('Answer the items first.');return}
  if(!syncOn()||!L.spw){toast('Connect and unlock Secret Shopper first.');return}
  var r=score(sh),tot=0,ans=0;EV(sh.type).secs.forEach(function(x){x.items.forEach(function(it){if(it[2]){tot++;if(sh.a[iid(sh.type,it)])ans++}})});
  if(!subArmed){subArmed=true;b.textContent=(ans<tot?ans+' of '+tot+' answered. ':'')+'Tap again to submit';setTimeout(function(){subArmed=false;b.textContent='Submit to store'},4000);return}
  subArmed=false;b.textContent='Submit to store';
  sh.submitted=Date.now();sh.updated=sh.submitted;L.dirty[sh.id]=1;lsave();renderSubmit();setStatus();push();toast('Submitted. Sending to the store…')};
function shopMail(s){var e=EV(s.type),out={subject:'Secret Shopper - '+fmtDate(s.date)+' '+s.part+(s.member?' - '+s.member:'')+' - '+(score(s).pct==null?'':score(s).pct+'%'),text:summary(s)};
  try{var doc=newDoc();if(doc){var y=pdfHeader(doc,e.t+' Evaluation',fmtDate(s.date)+' - '+s.part);sheetBody(doc,s,y);pdfFooter(doc);out.pdf=doc.output('datauristring').split(',')[1];out.pdfName='Secret-Shopper_'+(s.date||today())+'.pdf'}}catch(err){}
  return out}

/* ===== Manager lock ===== */
function mgrLock(silent){L.mpw='';Object.keys(L.sheets).forEach(function(k){if(!L.mine[k]){delete L.sheets[k];delete L.dirty[k]}});lsave();if(view==='manager')go('manager');if(!silent)toast('Manager view is locked on this device.')}
$('mgr_lock').onclick=function(){mgrLock(false)};
$('mp_go').onclick=function(){var pw=$('mp_in').value;if(!pw)return;
  if(!syncOn()){$('mp_err').textContent='This device isn’t connected. Open the pinned GroupMe link first.';return}
  var b=this;b.disabled=true;$('mp_err').textContent='Checking…';
  fetch(SYNC_URL+(SYNC_URL.indexOf('?')<0?'?':'&')+'action=mpw&k='+encodeURIComponent(L.key)+'&mp='+encodeURIComponent(pw)+'&t='+Date.now(),{cache:'no-store',redirect:'follow'}).then(function(r){return r.json()}).then(function(r){b.disabled=false;
    if(r&&r.ok&&r.mgr){L.mpw=pw;lsave();$('mp_in').value='';$('mp_err').textContent='';go('manager')}
    else $('mp_err').textContent=(r&&r.error==='bad_key')?'Wrong access key. Open the pinned GroupMe link again.':'Wrong password.'},
  function(){b.disabled=false;$('mp_err').textContent='Couldn’t reach the server. Try again.'})};
$('mp_in').addEventListener('keydown',function(e){if(e.key==='Enter')$('mp_go').click()});

/* ===== Manager view ===== */
var open={};
$('m_type').innerHTML=ORDER.map(function(t){return'<option value="'+t+'">'+esc(EVALS[t].t)+'</option>'}).join('');
function mType(){return $('m_type').value||'ipos'}
function pool(){var t=mType();return all().filter(function(s){return s.type===t&&answered(s)})}
function opts(sel,vals,lbl){var cur=sel.value;sel.innerHTML='<option value="">'+lbl+'</option>'+vals.map(function(v){return'<option'+(v===cur?' selected':'')+' value="'+esc(v)+'">'+esc(v)+'</option>'}).join('');if(vals.indexOf(cur)<0)sel.value=''}
function uniq(a){var m={};a.forEach(function(x){if(x)m[x]=1});return Object.keys(m).sort()}
function filtered(){var P=pool(),person=EV(mType()).person,fb=$('m_by').value,fp=$('m_part').value,fm=person?$('m_member').value:'',f1=$('m_from').value,f2=$('m_to').value;
  return P.filter(function(s){return(!fb||s.by.trim()===fb)&&(!fp||s.part===fp)&&(!fm||s.member.trim()===fm)&&(!f1||s.date>=f1)&&(!f2||s.date<=f2)}).sort(function(a,b){return(b.date||'').localeCompare(a.date||'')||b.updated-a.updated})}
function pctTxt(y,n){return y+n?Math.round(y/(y+n)*100)+'%':'–'}
function stats(type,E){var e=EV(type),Y=0,N=0,sec={};e.secs.forEach(function(x){sec[x.k]={y:0,n:0}});
  E.forEach(function(s){var r=score(s);Y+=r.Y;N+=r.N;e.secs.forEach(function(x){sec[x.k].y+=r.sec[x.k].y;sec[x.k].n+=r.sec[x.k].n})});
  var bm={};E.forEach(function(s){var m=s.member.trim()||'(no name)';var r=score(s);bm[m]=bm[m]||{n:0,Y:0,N:0,last:'',lastPct:null};var o=bm[m];o.n++;o.Y+=r.Y;o.N+=r.N;if((s.date||'')>=o.last){o.last=s.date||'';o.lastPct=r.pct}});
  var members=Object.keys(bm).map(function(m){var o=bm[m];return{m:m,o:o,pct:o.Y+o.N?o.Y/(o.Y+o.N):-1}}).sort(function(a,b){return a.pct-b.pct});
  var st=[];allItems(type).forEach(function(x){var y=0,n=0;E.forEach(function(s){if(s.a[x.id]==='y')y++;else if(s.a[x.id]==='n')n++});if(n)st.push({it:x.it,sec:x.sec.t,n:n,d:y+n})});
  st.sort(function(a,b){return b.n/b.d-a.n/a.d||b.n-a.n});
  return{Y:Y,N:N,sec:sec,members:members,missed:st}}
function renderMgr(){if($('v_mgr').hidden||!L.mpw)return;
  var t=mType(),e=EV(t),P=pool();
  $('m_memberlbl').hidden=!e.person;$('bymembercard').hidden=!e.person;
  opts($('m_by'),uniq(P.map(function(s){return s.by.trim()})),'All evaluators');
  opts($('m_part'),['Breakfast','Lunch','Afternoon','Dinner'].filter(function(p){return P.some(function(s){return s.part===p})}),'All day parts');
  opts($('m_member'),uniq(P.map(function(s){return s.member.trim()})),'All team members');
  var E=filtered();$('expcount').textContent='· '+E.length+' '+e.short+' evaluation'+(E.length===1?'':'s');
  $('x_pdf').disabled=$('x_csv').disabled=!E.length;
  if(!E.length){$('kpis').innerHTML='';['bymember','missed'].forEach(function(i){$(i).innerHTML='<div class="empty">No evaluations yet.</div>'});$('evtable').innerHTML='<div class="empty">No '+esc(e.t)+' evaluations match. Sheets show here once they have at least one answer.</div>';return}
  var T=stats(t,E);
  var k='<div class="kpi"><div class="v">'+pctTxt(T.Y,T.N)+'</div><div class="l">Overall compliance</div></div><div class="kpi"><div class="v">'+E.length+'</div><div class="l">Evaluations</div></div>';
  if(e.person)k+='<div class="kpi"><div class="v">'+T.members.length+'</div><div class="l">Team members</div></div>';
  if(e.secs.length>1)e.secs.forEach(function(x){k+='<div class="kpi"><div class="v">'+pctTxt(T.sec[x.k].y,T.sec[x.k].n)+'</div><div class="l">'+esc(x.t)+'</div></div>'});
  $('kpis').innerHTML=k;
  if(e.person)$('bymember').innerHTML='<table><thead><tr><th>Team member</th><th class="num">Evals</th><th class="num">Avg score</th><th class="num">Latest</th><th class="num">Last eval</th></tr></thead><tbody>'+
    T.members.map(function(r){return'<tr><td>'+esc(r.m)+'</td><td class="num">'+r.o.n+'</td><td class="num"><b>'+pctTxt(r.o.Y,r.o.N)+'</b></td><td class="num">'+(r.o.lastPct==null?'–':r.o.lastPct+'%')+'</td><td class="num">'+esc(fmtDate(r.o.last))+'</td></tr>'}).join('')+'</tbody></table>';
  $('missed').innerHTML=T.missed.length?T.missed.slice(0,10).map(function(m){var r=Math.round(m.n/m.d*100);return'<div class="miss"><div class="t">'+esc(m.it[1])+(m.it[2]?'':'<span class="tag">Unscored</span>')+ssTag(m.it)+'<br><small>'+esc(m.sec+' · '+m.it[0])+'</small></div><div class="c"><b>'+r+'%</b> missed<br>'+m.n+' of '+m.d+'</div><div class="track"><i style="width:'+r+'%"></i></div></div>'}).join(''):'<div class="empty">Nothing missed. Nice.</div>';
  var cols=e.person?5:4,h='<table><thead><tr><th>Date</th>'+(e.person?'<th>Team member</th>':'')+'<th>Day part</th><th class="num">Score</th><th>Evaluator</th></tr></thead><tbody>';
  E.forEach(function(s){var r=score(s);
    h+='<tr class="ev" data-id="'+esc(s.id)+'"><td>'+esc(fmtDate(s.date))+'</td>'+(e.person?'<td>'+esc(s.member||'(no name)')+'</td>':'')+'<td>'+esc(s.part)+'</td><td class="num"><b>'+(r.pct==null?'–':r.pct+'%')+'</b><br><small style="color:var(--muted)">'+r.N+' missed</small></td><td>'+esc(s.by||'—')+'</td></tr>';
    if(open[s.id]){var f='';allItems(t).forEach(function(x){if(s.a[x.id]==='n')f+='<li><b>'+esc(x.sec.t)+':</b> '+esc(x.it[1])+(x.it[2]?'':' (unscored)')+' – '+esc(x.it[3])+(s.n[x.id]?'<br><i>Note: '+esc(s.n[x.id])+'</i>':'')+'</li>'});
      h+='<tr class="det"><td colspan="'+cols+'">'+(f?'<b>Missed</b><ul>'+f+'</ul>':'No missed standards.')+(s.gen?'<p style="margin:8px 0 0"><b>Comments:</b> '+esc(s.gen)+'</p>':'')+'<div class="actions" style="margin-top:10px"><button data-open="'+esc(s.id)+'">Open sheet</button><button data-pdf="'+esc(s.id)+'">Export PDF</button></div></td></tr>'}});
  $('evtable').innerHTML=h+'</tbody></table>'}
$('evtable').addEventListener('click',function(e){
  var o=e.target.closest('button[data-open]');if(o){if(pick(o.dataset.open)===false)return;location.hash='evaluate';go('sheet');return}
  var p=e.target.closest('button[data-pdf]');if(p){pdfSheet(L.sheets[p.dataset.pdf]);return}
  var tr=e.target.closest('tr.ev');if(!tr)return;var id=tr.dataset.id;open[id]=!open[id];renderMgr()});
['m_type','m_by','m_part','m_member','m_from','m_to'].forEach(function(i){$(i).onchange=renderMgr});
$('m_clear').onclick=function(){['m_by','m_part','m_member','m_from','m_to'].forEach(function(i){$(i).value=''});renderMgr()};

/* ===== File output ===== */
function deliver(blob,name){
  var file=null;try{file=new File([blob],name,{type:blob.type})}catch(e){}
  if(file&&navigator.canShare&&navigator.canShare({files:[file]})){
    navigator.share({files:[file],title:name}).catch(function(err){if(err&&err.name!=='AbortError')download(blob,name)});return}
  download(blob,name)}
function download(blob,name){var u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(u);a.remove()},4000)}
function stamp(){var d=new Date();return today()+'_'+('0'+d.getHours()).slice(-2)+('0'+d.getMinutes()).slice(-2)}
function filterLabel(){var p=[];if(EV(mType()).person&&$('m_member').value)p.push($('m_member').value);if($('m_part').value)p.push($('m_part').value);if($('m_by').value)p.push('Evaluator: '+$('m_by').value);
  if($('m_from').value||$('m_to').value)p.push(($('m_from').value?fmtDate($('m_from').value):'start')+' to '+($('m_to').value?fmtDate($('m_to').value):'today'));return p.length?p.join(' · '):'All evaluations'}

/* CSV / sheet rows */
function csvCell(v){v=v==null?'':String(v);return /[",\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v}
function ans(v){return v==='y'?'Yes':v==='n'?'No':v==='na'?'N/A':''}
function rowHead(type){var e=EV(type),head=['Date','Day','Day part'].concat(e.person?['Team member']:[]).concat(['Evaluator','Score %','Compliant','Non-compliant']);
  allItems(type).forEach(function(x){head.push((e.secs.length>1?x.sec.t+' - ':'')+x.it[0]+' '+x.it[1]+(x.it[2]?'':' (unscored)')+ssTxt(x.it));head.push(x.it[0]+' note')});head.push('Comments');return head}
function rowOf(s){var e=EV(s.type),r=score(s),row=[s.date,dayName(s.date),s.part].concat(e.person?[s.member]:[]).concat([s.by,r.pct==null?'':r.pct,r.Y,r.N]);
  allItems(s.type).forEach(function(x){row.push(ans(s.a[x.id]));row.push(s.n[x.id]||'')});row.push(s.gen);return row}
$('x_csv').onclick=function(){var E=filtered();if(!E.length)return;var t=mType();
  var rows=[rowHead(t)];E.slice().reverse().forEach(function(s){rows.push(rowOf(s))});
  var txt='﻿'+rows.map(function(r){return r.map(csvCell).join(',')}).join('\r\n');
  deliver(new Blob([txt],{type:'text/csv'}),slug(EV(t).short)+'-evaluations_'+stamp()+'.csv')};

/* PDF */
function pdfText(s){return String(s==null?'':s).replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/–|—/g,'-').replace(/·/g,'-').replace(/[^\x09\x0A\x0D\x20-\x7E -ÿ]/g,'')}
function newDoc(){if(!window.jspdf||!window.jspdf.jsPDF){toast('PDF tool did not load. Open the app once while online.');return null}
  var doc=new window.jspdf.jsPDF({unit:'pt',format:'letter'});if(typeof doc.autoTable!=='function'){toast('PDF table tool did not load. Open the app once while online.');return null}return doc}
var C={accent:[30,78,140],ok:[31,122,77],bad:[179,32,58],muted:[100,112,126],okbg:[223,243,231],badbg:[251,227,232]};
function pdfHeader(doc,title,sub){var W=doc.internal.pageSize.getWidth();doc.setFillColor.apply(doc,C.accent);doc.rect(0,0,W,58,'F');
  doc.setTextColor(255);doc.setFont('helvetica','bold');doc.setFontSize(18);doc.text(pdfText(title),40,36);
  doc.setFont('helvetica','normal');doc.setFontSize(10);doc.text(pdfText(sub),W-40,36,{align:'right'});doc.setTextColor(0);return 84}
function pdfFooter(doc){var n=doc.internal.getNumberOfPages(),W=doc.internal.pageSize.getWidth(),H=doc.internal.pageSize.getHeight();
  for(var i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor.apply(doc,C.muted);doc.text(pdfText(APP+' - exported '+new Date().toLocaleString('en-US')),40,H-24);doc.text('Page '+i+' of '+n,W-40,H-24,{align:'right'})}doc.setTextColor(0)}
function kv(doc,y,pairs){var x=40;doc.setFontSize(10);pairs.forEach(function(p){doc.setTextColor.apply(doc,C.muted);doc.setFont('helvetica','normal');doc.text(pdfText(p[0]),x,y);doc.setTextColor(0);doc.setFont('helvetica','bold');doc.text(pdfText(p[1]||'-'),x,y+14);x+=p[2]||130});return y+34}
function sheetBody(doc,s,y){var e=EV(s.type),r=score(s),W=doc.internal.pageSize.getWidth();
  var top=(e.person?[['Team member',s.member||'(no name)',170]]:[]).concat([['Evaluator',s.by||'-',130],['Date',dayName(s.date)+' '+fmtDate(s.date),150],['Day part',s.part,80]]);
  y=kv(doc,y,top);
  y=kv(doc,y,[['Score',r.pct==null?'-':r.pct+'%',90],['Compliant',String(r.Y),70],['Non-compliant',String(r.N),80]]);
  var rows=[];e.secs.forEach(function(sec){if(e.secs.length>1)rows.push([{content:pdfText(sec.t),colSpan:4,styles:{fontStyle:'bold',fillColor:[229,233,238]}}]);
    sec.items.forEach(function(it){var id=iid(s.type,it),v=s.a[id];rows.push([it[0],pdfText(it[1])+(it[2]?'':' (unscored)')+(it[4]?'\n[Missed on Smart Shop: '+it[4]+']':''),ans(v)||'-',pdfText(v==='n'?it[3]+(s.n[id]?'\nNote: '+s.n[id]:''):(s.n[id]?'Note: '+s.n[id]:''))])})});
  doc.autoTable({startY:y,head:[['ID','Standard','Result','Details']],body:rows,margin:{left:40,right:40},styles:{fontSize:9,cellPadding:5,valign:'top'},headStyles:{fillColor:C.accent},
    columnStyles:{0:{cellWidth:52},1:{cellWidth:240},2:{cellWidth:50,fontStyle:'bold',halign:'center'},3:{cellWidth:'auto'}},
    didParseCell:function(d){if(d.section==='body'&&d.column.index===2){var t=d.cell.raw;if(t==='Yes'){d.cell.styles.textColor=C.ok;d.cell.styles.fillColor=C.okbg}else if(t==='No'){d.cell.styles.textColor=C.bad;d.cell.styles.fillColor=C.badbg}}}});
  y=doc.lastAutoTable.finalY+18;
  if(s.gen){if(y>doc.internal.pageSize.getHeight()-100){doc.addPage();y=50}doc.setFont('helvetica','bold');doc.setFontSize(11);doc.text('Overall comments',40,y);doc.setFont('helvetica','normal');doc.setFontSize(10);
    var lines=doc.splitTextToSize(pdfText(s.gen),W-80);doc.text(lines,40,y+16);y+=16+lines.length*12}
  return y}
function pdfSheet(s){var doc=newDoc();if(!doc)return;var e=EV(s.type);var y=pdfHeader(doc,e.t+' Evaluation',fmtDate(s.date)+' - '+s.part);sheetBody(doc,s,y);pdfFooter(doc);
  deliver(doc.output('blob'),slug(e.short)+'_'+(e.person?slug(s.member)+'_':'')+(s.date||today())+'.pdf')}
$('pdf1').onclick=function(){if(!answered(sh)){toast('Answer at least one item first.');return}pdfSheet(sh)};
$('x_pdf').onclick=function(){var E=filtered();if(!E.length)return;var doc=newDoc();if(!doc)return;var t=mType(),e=EV(t),T=stats(t,E),H=doc.internal.pageSize.getHeight();
  var y=pdfHeader(doc,e.t+' Report',filterLabel());
  y=kv(doc,y,[['Overall compliance',pctTxt(T.Y,T.N),130],['Evaluations',String(E.length),100]].concat(e.person?[['Team members',String(T.members.length),110]]:[]).concat([['Compliant / non-compliant',T.Y+' / '+T.N,150]]));
  if(e.secs.length>1){doc.autoTable({startY:y,head:[['Section','Compliance','Compliant','Non-compliant']],body:e.secs.map(function(x){return[pdfText(x.t),pctTxt(T.sec[x.k].y,T.sec[x.k].n),T.sec[x.k].y,T.sec[x.k].n]}),
    margin:{left:40,right:40},styles:{fontSize:9,cellPadding:5},headStyles:{fillColor:C.accent},columnStyles:{1:{halign:'right',fontStyle:'bold'},2:{halign:'right'},3:{halign:'right'}},didParseCell:function(d){if(d.section==='head'&&d.column.index>0)d.cell.styles.halign='right'}});y=doc.lastAutoTable.finalY+24}
  if(e.person){doc.setFont('helvetica','bold');doc.setFontSize(12);doc.text('By team member',40,y+6);
  doc.autoTable({startY:y+14,head:[['Team member','Evals','Avg score','Latest','Last eval']],body:T.members.map(function(r){return[pdfText(r.m),r.o.n,pctTxt(r.o.Y,r.o.N),r.o.lastPct==null?'-':r.o.lastPct+'%',fmtDate(r.o.last)]}),
    margin:{left:40,right:40},styles:{fontSize:9,cellPadding:5},headStyles:{fillColor:C.accent},columnStyles:{1:{halign:'right'},2:{halign:'right',fontStyle:'bold'},3:{halign:'right'},4:{halign:'right'}},didParseCell:function(d){if(d.section==='head'&&d.column.index>0)d.cell.styles.halign='right'}});
  y=doc.lastAutoTable.finalY+24}
  if(y>H-120){doc.addPage();y=50}
  doc.setFont('helvetica','bold');doc.setFontSize(12);doc.text('Most missed standards',40,y);
  doc.autoTable({startY:y+8,head:[['ID','Standard','Missed','Rate']],body:T.missed.length?T.missed.map(function(m){return[m.it[0],pdfText((e.secs.length>1?m.sec+': ':'')+m.it[1])+(m.it[2]?'':' (unscored)')+(m.it[4]?' [Missed on Smart Shop: '+m.it[4]+']':''),m.n+' of '+m.d,Math.round(m.n/m.d*100)+'%']}):[['','Nothing missed','','']],
    margin:{left:40,right:40},styles:{fontSize:9,cellPadding:5},headStyles:{fillColor:C.accent},columnStyles:{0:{cellWidth:52},2:{halign:'right',cellWidth:60},3:{halign:'right',cellWidth:50,fontStyle:'bold'}},didParseCell:function(d){if(d.section==='head'&&d.column.index>1)d.cell.styles.halign='right'}});
  y=doc.lastAutoTable.finalY+24;if(y>H-120){doc.addPage();y=50}
  doc.setFont('helvetica','bold');doc.setFontSize(12);doc.text('Evaluations',40,y);
  var hd=['Date'].concat(e.person?['Team member']:[]).concat(['Day part','Score','Missed','Evaluator']);
  doc.autoTable({startY:y+8,head:[hd],body:E.map(function(s){var r=score(s),m=[];allItems(t).forEach(function(x){if(s.a[x.id]==='n')m.push(pdfText(x.it[1])+(s.n[x.id]?' (Note: '+pdfText(s.n[x.id])+')':''))});
      return[fmtDate(s.date)].concat(e.person?[pdfText(s.member||'(no name)')]:[]).concat([s.part,r.pct==null?'-':r.pct+'%',m.length?m.join('\n'):'-',pdfText(s.by||'-')])}),
    margin:{left:40,right:40},styles:{fontSize:8.5,cellPadding:4,valign:'top'},headStyles:{fillColor:C.accent}});
  E.forEach(function(s){doc.addPage();var yy=pdfHeader(doc,e.t+' Evaluation',fmtDate(s.date)+' - '+s.part);sheetBody(doc,s,yy)});
  pdfFooter(doc);deliver(doc.output('blob'),slug(e.short)+'-report_'+stamp()+'.pdf')};

/* ===== Backup ===== */
$('b_save').onclick=function(){var data={app:'ipos-eval',version:2,exported:new Date().toISOString(),sheets:L.sheets};
  deliver(new Blob([JSON.stringify(data)],{type:'application/json'}),'TigerTown-evals-backup_'+stamp()+'.json')};
$('b_load').onclick=function(){$('b_file').value='';$('b_file').click()};
$('b_file').onchange=function(){var f=this.files&&this.files[0];if(!f)return;var rd=new FileReader();
  rd.onload=function(){try{var p=JSON.parse(rd.result),src=obj(p.sheets),added=0,updated=0;
      Object.keys(src).forEach(function(k){var s=norm(k,src[k]);if(!L.sheets[k]){L.sheets[k]=s;L.dirty[k]=1;added++}else if(L.sheets[k].updated<s.updated){L.sheets[k]=s;L.dirty[k]=1;updated++}});
      lsave();queueSync();renderHome();renderMgr();setStatus();toast('Restored: '+added+' added, '+updated+' updated.')}catch(e){toast('That file is not a TigerTown backup.')}};
  rd.readAsText(f)};

/* ===== Sync (Google Sheet via Apps Script) ===== */
var SYNC_URL='',syncing=false,syncErr='',stimer=null;
function syncUrl(){var c=String(window.IPOS_SYNC_URL||'').trim();return c||(L.sid?'https://script.google.com/macros/s/'+L.sid+'/exec':'')}
function syncOn(){SYNC_URL=syncUrl();return !!(SYNC_URL&&L.key)}
function readKey(v){v=String(v||'').trim();var m=v.match(/[?&#]k=([A-Za-z0-9_-]+)/);return m?m[1]:(/^[A-Za-z0-9_-]{6,}$/.test(v)?v:'')}
function readSid(v){var m=String(v||'').match(/[?&#]s=([A-Za-z0-9_-]{20,})/)||String(v||'').match(/macros\/s\/([A-Za-z0-9_-]{20,})/);return m?m[1]:''}
function takeKeyFromUrl(){var k=readKey(location.search)||readKey(location.hash),d=readSid(location.search)||readSid(location.hash);if(d&&d!==L.sid){L.sid=d;syncErr='';lsave()}if(k&&k!==L.key){L.key=k;syncErr='';lsave()}}
function queueSync(){if(!syncOn())return;clearTimeout(stimer);stimer=setTimeout(push,1200)}
function api(method,body){
  if(method==='GET')return fetch(SYNC_URL+(SYNC_URL.indexOf('?')<0?'?':'&')+'k='+encodeURIComponent(L.key)+(L.mpw?'&mp='+encodeURIComponent(L.mpw):'')+'&t='+Date.now(),{cache:'no-store',redirect:'follow'}).then(function(r){return r.json()});
  body.k=L.key;return fetch(SYNC_URL,{method:'POST',body:JSON.stringify(body),redirect:'follow'}).then(function(r){return r.json()})}
var TABS={ipos:'IPOS',co:'Carry Out & Facilities',boh:'Back of House',shop:'Secret Shopper'};
function keep(s){return s&&(answered(s)||s.member||s.gen)}
function push(){if(!syncOn()||syncing)return;var ids=Object.keys(L.dirty),dels=Object.keys(L.dels);if(!ids.length&&!dels.length)return;
  var put=ids.filter(function(k){return keep(L.sheets[k])}).map(function(k){var s=L.sheets[k],o={id:k,tab:TABS[s.type],updated:s.updated,data:s,cols:rowOf(s)};if(s.type==='shop'&&s.submitted)o.mail=shopMail(s);return o});
  ids.forEach(function(k){if(!keep(L.sheets[k]))delete L.dirty[k]});
  if(!put.length&&!dels.length){lsave();setStatus();return}
  var sent={};put.forEach(function(x){sent[x.id]=x.updated});
  var heads={};ORDER.forEach(function(t){heads[TABS[t]]=rowHead(t)});
  syncing=true;setStatus();
  api('POST',{put:put,del:dels,heads:heads,head:rowHead('ipos'),spw:L.spw||''}).then(function(r){syncing=false;
    if(!r||!r.ok){syncErr=r&&r.error||'error';setStatus();if(syncErr!=='bad_key')setTimeout(push,30000);return}
    syncErr='';(r.saved||[]).forEach(function(k){if(L.sheets[k]&&L.sheets[k].updated===sent[k])delete L.dirty[k]});(r.deleted||[]).forEach(function(k){delete L.dels[k]});
    if(r.mailed&&r.mailed.length)toast('Sent to the store.');
    if(r.rejected&&r.rejected.length){r.rejected.forEach(function(k){delete L.dirty[k];delete L.dels[k]});var sub=r.rejected.some(function(k){return L.sheets[k]&&L.sheets[k].submitted});if(!sub&&L.spw){L.spw='';renderHome()}toast(sub?'That sheet was already submitted, so it can’t be changed.':'Secret Shopper changes need the password. They were not saved.');setTimeout(pull,500)}
    lsave();setStatus();if(Object.keys(L.dirty).length)queueSync()},
  function(){syncing=false;syncErr='offline';setStatus();setTimeout(push,30000)})}
var pulling=false;
function pull(){if(!syncOn()||pulling)return;pulling=true;
  api('GET').then(function(r){pulling=false;
    if(!r||!r.ok){syncErr=r&&r.error||'error';setStatus();return}
    syncErr=Object.keys(L.dirty).length?syncErr:'';
    if(L.mpw&&r.mgr===false){mgrLock(true)}
    var gone={};(r.deleted||[]).forEach(function(k){gone[k]=1});
    Object.keys(gone).forEach(function(k){if(L.sheets[k]&&k!==L.cur){delete L.sheets[k];delete L.mine[k];delete L.dirty[k]}});
    var curChanged=false;
    (r.items||[]).forEach(function(it){if(gone[it.id])return;var loc=L.sheets[it.id];
      if(!loc||(+it.updated>loc.updated&&!L.dirty[it.id])){L.sheets[it.id]=norm(it.id,it.data);L.sheets[it.id].updated=+it.updated||L.sheets[it.id].updated;if(it.id===L.cur)curChanged=true}});
    L.lastSync=Date.now();lsave();
    if(curChanged&&view==='sheet'){var ae=document.activeElement;sh=L.sheets[L.cur];if(!(ae&&/INPUT|TEXTAREA|SELECT/.test(ae.tagName))){renderFields();renderItems()}}
    if(view==='home')renderHome();renderMgr();setStatus();push()},
  function(){pulling=false;syncErr='offline';setStatus()})}
$('k_go').onclick=function(){var v=$('k_in').value,k=readKey(v),d=readSid(v);if(d)L.sid=d;if(!k){toast('That doesn’t look like the pinned link.');return}L.key=k;syncErr='';lsave();
  Object.keys(L.sheets).forEach(function(id){if(answered(L.sheets[id]))L.dirty[id]=1});lsave();$('keycard').hidden=true;pull();setStatus()};
window.addEventListener('online',function(){syncErr='';pull()});
document.addEventListener('visibilitychange',function(){if(!document.hidden)pull()});
setInterval(function(){if(!document.hidden)pull()},60000);

/* ===== Views ===== */
function go(v){view=v;var m=v==='manager';
  $('v_home').hidden=v!=='home';$('v_sheet').hidden=v!=='sheet';$('v_mgr').hidden=!m;
  $('t_eval').classList.toggle('on',!m);$('t_mgr').classList.toggle('on',m);
  if(v==='home')renderHome();
  if(v==='sheet'&&!sh){go('home');return}
  if(m){var open_=!!L.mpw;$('mgrlock').hidden=open_;$('mgrbody').hidden=!open_;if(!open_){$('mp_err').textContent='';setTimeout(function(){$('mp_in').focus()},50)}else{pull();$('keycard').hidden=syncOn();renderMgr()}}
  window.scrollTo(0,0)}
$('t_eval').onclick=function(){location.hash='evaluate';go('home')};
$('t_mgr').onclick=function(){location.hash='manager';go('manager')};
window.addEventListener('hashchange',function(){takeKeyFromUrl();if(location.hash==='#manager')go('manager');else if(view==='manager')go('home')});

/* ===== Start ===== */
lload();takeKeyFromUrl();
/* drop empty sheets left over from older versions */
Object.keys(L.sheets).forEach(function(k){var s=L.sheets[k];if(!keep(s)&&k!==L.cur){delete L.sheets[k];delete L.mine[k];delete L.dirty[k]}});lsave();
go(location.hash==='#manager'?'manager':'home');
setStatus();pull();push();
if('serviceWorker' in navigator&&location.protocol==='https:'){navigator.serviceWorker.register('sw.js').catch(function(){})}
