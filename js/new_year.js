(function($) {

	$.fn.cntl = function(options) {

		
		var settings = $.extend({
			revealbefore: 200,
			
			anim_class: 'cntl-animate',
			
			onreveal: null 
		}, options);

		return this.each(function() {

			var statelist = $(this).find('.cntl-state');
			var bar_fill = $(this).find('.cntl-bar-fill');
			var states = [];
			var tbf = 0;

			function setupElements() {

				for(var i = 0; i < statelist.length; i++) {

					states[i] = {};
					states[i]['top'] = $(statelist[i]).offset().top + settings.revealbefore;
					states[i]['elm'] = $(statelist[i]);

				};

				revealElements();

			}

			function revealElements() {

				var windowtop = $(window).scrollTop();
				var windowbtm = windowtop + $(window).height();

				for(var i = 0; i < states.length; i++) {

					if(states[i].top > windowtop && states[i].top < windowbtm) {
						if(!states[i].elm.hasClass(settings.anim_class) &&
							$.isFunction(settings.onreveal)) {
							settings.onreveal.call(this, states[i].elm);
						}

						states[i].elm.addClass(settings.anim_class);
						var h = states[i].elm.position().top;

						if(h > tbf) {
							tbf = h;
						}
						bar_fill.height(tbf);

					}
				};

			}

			$(window).on('scroll', revealElements);
			$(window).on('load', setupElements)

		});
	}

}(jQuery));

//2
(function(e) {
	e.fn.cntl = function(t) {
		var n = e.extend({
			revealbefore: 200,
			anim_class: "cntl-animate",
			onreveal: null
		}, t);
		return this.each(function() {
			function o() {
				for(var r = 0; r < t.length; r++) {
					i[r] = {};
					i[r]["top"] = e(t[r]).offset().top + n.revealbefore;
					i[r]["elm"] = e(t[r])
				}
				u()
			}

			function u() {
				var t = e(window).scrollTop();
				var o = t + e(window).height();
				for(var u = 0; u < i.length; u++) {
					if(i[u].top > t && i[u].top < o) {
						if(!i[u].elm.hasClass(n.anim_class) && e.isFunction(n.onreveal)) {
							n.onreveal.call(this, i[u].elm)
						}
						i[u].elm.addClass(n.anim_class);
						var a = i[u].elm.position().top;
						if(a > s) {
							s = a
						}
						r.height(s)
					}
				}
			}
			var t = e(this).find(".cntl-state");
			var r = e(this).find(".cntl-bar-fill");
			var i = [];
			var s = 0;
			e(window).on("scroll", u);
			e(window).on("load", o)
		})
	}
})(jQuery)