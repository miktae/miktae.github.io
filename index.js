 let w=$(window).width();
	if(w<=414){
		alert("Use a wider screen for a better experience!");
	}
	var name= new Vue({
		el: 'h1',
		data:{
			name: "MIK TAE"
		}
	});
	var passage= new Vue({
		el: '#passage',
		data:{
			passage:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in."
		}
	});
	var face= new Vue({
		el: '#facebook',
		data:{
			url: "https://nguyenvanthanhminn.github.io/contact/facebook.svg"
		},
		methods:{
			openf: function(){
				open("https://www.facebook.com/miktae.7","_blank");
			}
		}
	});
	var ins= new Vue({
		el: '#ins',
		data:{
			url: "https://nguyenvanthanhminn.github.io/contact/instagram.svg"
		},
		methods:{
			openi: function(){
				open("https://www.instagram.com/mik_tae_7","_blank");
			}
		}
	});
	var github= new Vue({
		el: '#github',
		data:{
			url: "https://nguyenvanthanhminn.github.io/contact/github.svg"
		},
		methods:{
			openg: function(){
				open("https://www.miktae.github.io","_blank");
			}
		}
	});
	var oth= new Vue({
		el: '.sectionTitle',
		data:{
			message: "OTHERS"
		}
	});
	var email= new Vue({
		el: '#mail',
		data:{
			mail: "taetae22110107@gmail.com"
		}
	});
	var web= new Vue({
		el: '#web',
		data:{
			website: "https://www.miktae.com"
		}
	});
	var a= new Vue({
		el: '#addr',
		data:{
			address: "Hanoi, Vietnam"
		}
	});
	var c= new Vue({
		el: '.footerDisclaimer',
		data:{
			copyright: "2021 Copyrights - All Rights Reserved"
		}
	});
	var note= new Vue({
		el: '.footerNote',
		data:{
			note: "Mik Tae"
		}
	});
