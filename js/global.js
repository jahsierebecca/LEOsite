
// // --- Views ---
// var app = {};

// // var PageView = Backbone.View.Extend({
// // 	el: 'body'
// // });

// app.PageView = Backbone.View.extend({
// 	el: '#page-div',
// 	template: '<header class="flex-item">' +
// 		'<h1 id="site-title">LEO</h1>' +
// 		'</header>' +
// 		'<nav role="navigation" class="main-nav flex-item" id="main-nav">' +
// 		'</nav>' +
// 		'<div id="main-banner" class="flex-item"></div>' +
// 		'<div id="music-div" class="flex-item"></div>' +
// 		'<footer id="footer" class="flex-item">' +
// 		'</footer>',
// 	render: function() {
// 		console.log('rendering main view');
// 		this.$el.html(this.template);
// 		app.navView = new app.NavView();
// 		app.navView.render();
// 		app.bannerView = new app.BannerView();
// 		app.bannerView.render();
// 		app.footerView = new app.FooterView();
// 		app.footerView.render();
// 		app.featuredTunesView = new app.FeaturedTunesView();
// 		app.featuredTunesView.render();
// 	},
// 	initialize: function() {
// 		console.log('initializing pageView')
// 	},
// });

// app.NavView = Backbone.View.extend({
// 	events: {
// 		"click #collab-button": "expandCollab",
// 		"click #about-button": "expandAbout",
// 		"click #shows-button": "expandShows",
// 		"click #gallery-button": "expandGallery"
// 	},
// 	el: '#main-nav',
// 	expandGallery: function() {
// 		console.log('expand gallleryyyyy');
// 	},
// 	expandShows: function() {

// 	},
// 	expandAbout: function() {

// 	},
// 	expandCollab: function() {

// 	},
// 	render: function() {
// 		console.log('hi');
// 	},
// 	template: '<ul id="main-nav-list">' +
// 				'<li>' +
// 					'<a href="https://soundcloud.com/music-by-leo" target="blank">' +
// 						'<div>Soundcloud</div>' +
// 					'</a>' +
// 				'</li>' +
// 				'<li>' +
// 					'<a href="http://leomusic4.bandcamp.com/" target="blank">' +
// 						'<div>Bandcamp</div>' +
// 					'</a>' +
// 				'</li>' +
// 				'<li>' +
// 					'<a href="#" id="about-button">' +
// 						'<div>About</div>' +
// 					'</a>' +
// 				'</li>' +
// 				'<li>' +
// 					'<a href="#" id="shows-button">' +
// 						'<div>Shows</div>' +
// 					'</a>' +
// 				'</li>' +
// 				'<li>' +
// 					'<a href="#" id="gallery-button">' +
// 						'<div>Gallery</div>' +
// 					'</a>' +
// 				'</li>' +
// 				'<li>' +
// 					'<a href="#" id="collab-button">' +
// 						'<div>Collaboration</div>' +
// 					'</a>' +
// 				'</li>' +
// 			'</ul>',
// 	initialize: function() {
// 		console.log('initializing navView');
// 		this.render();
// 	},
// 	render: function() {
// 		$(this.el).html(this.template);
// 	},
// });

// // app.BannerView = Backbone.View.extend({
// // 	el: '#main-banner',
// // 	template: '<div><h2>jkhsaldf</h2></div>',
// // 	},	
// // 	initialize: function() {
// // 		console.log('initializing bannerView');
// // 		this.render();
// // 	},
// // 	render: function() {
// // 		$(this.el).html(this.template);
// // 	},
// // });

// app.BannerView = Backbone.View.extend({
// 	el: '#main-banner',
// 	template: '<div></div>',
// 	initialize: function() {
// 		console.log('initializing Banner featuredView');
// 		this.render();
// 	},	
// 	render: function() {
// 		$(this.el).html(this.template);
// 	},
// });

// app.FeaturedTunesView = Backbone.View.extend({
// 	el: '#music-div',
// 	template: '<div class="song"><iframe style="border: 0; width: 100%; height: 42px;" src="http://bandcamp.com/EmbeddedPlayer/album=2605738690/size=small/bgcol=ffffff/linkcol=FF0080/transparent=true/" seamless><a href="http://leomusic4.bandcamp.com/album/murder-mystery">Murder Mystery by LEO</a></iframe></div>' + 
// 		'<div class="song" id="middle-song"><iframe style="border: 0; width: 100%; height: 42px;" src="http://bandcamp.com/EmbeddedPlayer/album=870765122/size=small/bgcol=ffffff/linkcol=FF0080/transparent=true/" seamless><a href="http://leomusic4.bandcamp.com/album/second-coming">Second Coming by LEO</a></iframe></iframe></div>' + 
// 		'<div class="song"><iframe style="border: 0; width: 100%; height: 42px;" src="http://bandcamp.com/EmbeddedPlayer/album=2515896235/size=small/bgcol=ffffff/linkcol=FF0080/transparent=true/" seamless><a href="http://leomusic4.bandcamp.com/album/dont-take-the-covers">Don&#39;t take the COVERS. by LEO</a></iframe></div>',
// 	initialize: function() {
// 		console.log('initializing featuredView');
// 		this.render();
// 	},	
// 	render: function() {
// 		$(this.el).html(this.template);
// 	},
// });

// app.FooterView = Backbone.View.extend({
// 	el: '#footer',
// 	// render: function() {

// 	// }
// 	template: '<p class="center-text">' +
// 			'<a href="https://www.instagram.com/i.like.leo" target="blank"><i class="fa fa-instagram"></i></a>' +
// 			'<a href="https://twitter.com/megandiana" target="blank"><i class="fa fa-twitter-square"></i></a>' +
// 			'<a href="https://www.facebook.com/I.LIKE.LEO" target="blank"><i class="fa fa-facebook-official"></i></a>' +
// 		'</p>',
// 	initialize: function() {
// 		this.render();
// 		console.log('initializing footerView');
// 	},
// 	render: function() {
// 		$(this.el).html(this.template);
// 	},
// });

// // var BoardView = Backbone.View.extend({
// // 	id:'checkerboard',
// // 	tagName: 'table',
// // 	initialize: function() {
// // 		this.collection.on('change:sq',this.render,this);
// // 		this.squares = [];//subviews
// // 		var n=0;
// // 		for (var i=0; i<8; ++i) {
// // 			var $row = $('<tr>').appendTo(this.$el);
// // 			for (var j=0; j<8; ++j) {
// // 				var opts = {
// // 					collection: this.collection,
// // 					className: ((i%2==j%2)?'odd':'even'),
// // 					$row: $row,
// // 					n: n++
// // 				}
// // 				this.squares.push(new SquareView(opts));
// // 			}
// // 		}
// // 		this.$el.appendTo('body');
// // 	},
// // 	render: function(model) {
// // 		console.log("refreshing...");
// // 		if (!model)
// // 			this.squares.forEach(function(sq){sq.render()}); //render all
// // 		else { //render just changed squares
// // 			var newSq = model.get('sq');
// // 			var oldSq = model.previous('sq');
// // 			this.squares[newSq].render(model);
// // 			this.squares[oldSq].render(false);
// // 		}
// // 	},
// //     changeGame: function(coll) {
// //         this.collection.off('change:sq');
// //         coll.on('change:sq',this.render,this);
// //         this.collection = coll;
// //         this.squares.forEach(function(sq){sq.collection = coll;});
// //         this.render();
// //     }
// // });


// function loadPage() {
// 	// game1 = new Checkers();
//  //    game2 = new Chessmen();
// 	app.pageView = new app.PageView();
// 	app.pageView.render();
// }

// $(loadPage);
