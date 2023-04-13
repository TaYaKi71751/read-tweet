(async () => {
	const ok = Object.keys;function parentTillArticle(e){
		if(`${e?.tagName}`?.toUpperCase() == "ARTICLE") return e;
		else if(e?.parentNode) return parentTillArticle(e.parentNode);
		else return;
	}
	const d=document;
	const b=d.body;
	function ro(e){
		const p=e.parentNode.tagName.toUpperCase();
		if(
			!e?.childNodes?.length &&
			e.textContent&&p!="SCRIPT" &&
			p!="STYLE" &&
			p!="NOSCRIPT"
		) {
			return [e.textContent || ""];
		}
		if(e?.childNodes?.length){
			let _ = [];
			e.childNodes.forEach((a)=>{
				_ = [..._,...ro(a)];
			});
			return _;
		}
		else return [];
	}
	function r(e){
		const p=e.parentNode.tagName.toUpperCase();
		if(
			!e?.childNodes?.length &&
			e.textContent&&p!="SCRIPT" &&
			p!="STYLE" &&
			p!="NOSCRIPT"
		) {
			if(parentTillArticle(e)){
				console.log(parentTillArticle(e),ro((parentTillArticle(e))));
			}
			return;
		}
		e?.childNodes?.forEach((a)=>{r(a);})
	}
	r(b);
	const e_ = ok(d.__proto__.__proto__).reduce((a, e)=> { // https://stackoverflow.com/questions/39963850/how-can-i-add-an-event-listener-for-all-events-in-javascript-without-listing-the
		if(e.startsWith('on')) return [...a, e.substr(2)];
		return a;
	}, []);
	e_.forEach(async (e) => {
		d.addEventListener(e,()=>(r(b)));
	});
})();
