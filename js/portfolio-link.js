
jQuery(document).ready(function(a)
	{a(".timeline-item-trigger span").click(function(){a(this).hasClass("fa fa-plus")?a(this).removeClass("fa fa-plus").addClass("fa fa-minus"):a(this).removeClass("fa fa-minus").addClass("fa fa-plus")
}),a(".timeline-item-title").click(function(){$trigger=a(this).parent().parent().find(".timeline-item-trigger span"
	),$trigger.hasClass("fa fa-plus")?$trigger.removeClass("fa fa-plus").addClass("fa fa-minus"):$trigger.removeClass("fa fa-minus").addClass("fa fa-plus")
}),a(window).load(function(){!function(){a("#project-details-box");var c=a(".portfolio-container .portfolio-item"
	);index=c.length,a(".portfolio-container .portfolio-item").click(function(){if(a(this).hasClass("active"
		));else{lastIndex=index,index=a(this).index(),c.removeClass("active"),a(this).addClass("active");var b=a(this).find(
	".project-link").attr("href")+" .port-holder";a("#project-data").animate({opacity:0},400,function(){a("#project-data"
		).load(b,function(){var c=a(".helper"),d=c.height();a("#project-data").css("min-height",d),a("#project-carousel"
			).owlCarousel({autoPlay:3e3,navigation:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0})}),a("#project-data"
		).delay(400).animate({opacity:1},400)}),a("html, body").animate({scrollTop:a(".portfolio-start").offset().top-40
},900),a("#project-details-box").slideUp(600,function(){a("#project-data").css("visibility","visible")}).delay(1100
).slideDown(1e3,function(){a(".fade_in").each(function(){a(this).appear(function(){a(this).delay(100).animate({opacity:1,right:"0px"
},1e3)})})})}return!1}),a(document).on("click","#portfolio-close",function(){return a("#project-data").animate({opacity:0
	},400,function(){a("#project-details-box").delay(400).slideUp(400)}),a("html, body").delay(1e3).animate({scrollTop:a(
		".portfolio-start").offset().top-70},800),c.removeClass("active"),!1})}()})});