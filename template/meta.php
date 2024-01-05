
<!DOCTYPE html>
	<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
		
		
		<title>Alconic</title>


		<!-- CSS -->
		<link href="<?php echo get_template_directory_uri(); ?>/style.css" rel="stylesheet" type="text/css">
		<link href="<?php echo get_template_directory_uri(); ?>/scss/main.css" rel="stylesheet" type="text/css">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.ico" id="favicon">
		<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

		<link href="<?php echo get_template_directory_uri(); ?>/scss/slick-theme.css" rel="stylesheet">
		<link href="<?php echo get_template_directory_uri(); ?>/scss/slick.css" rel="stylesheet">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css" />

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Chonburi&family=M+PLUS+1p:wght@400;800&family=Manrope:wght@200;400&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

		<script>
			document.addEventListener('DOMContentLoaded', function() {
				var ua = navigator.userAgent
				var isSmartPhone = ua.indexOf('iPhone') > -1 ||
					(ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)
				var isTablet = !isSmartPhone && (
					ua.indexOf('iPad') > -1 ||
					(ua.indexOf('Macintosh') > -1 && 'ontouchend' in document) ||
					ua.indexOf('Android') > -1
				)
				if (isTablet) ViewportExtra.setContent({ minWidth: 1200 })
			})
		</script>

		<script>
			(function(d) {
				var config = {
				kitId: 'nww3znh',
				scriptTimeout: 3000,
				async: true
				},
				h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
			})(document);
		</script>

			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@700&family=Kumbh+Sans&family=M+PLUS+1p:wght@400;800&family=Manrope:wght@200;400&family=Montserrat:wght@400;600;700&family=Noto+Sans+JP&family=Noto+Serif+JP:wght@700&display=swap" rel="stylesheet">
		


		
		<?php wp_head(); ?>


	</head>