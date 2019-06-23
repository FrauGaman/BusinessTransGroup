<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Контакты</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>

	<?php include('indexPopup.php'); ?>

	<?php include('burgerMenu.php'); ?>

	<div class="header">
		<?php include('header.php'); ?>
	</div>

	

	<section class="contacts">
		<header>
			<img src="img/service/service_line.png" alt="">
			<h1>Контакты</h1>
			<img src="img/service/service_line.png" alt="">
		</header>
		<div class="contacts_box">
			<div class="out">
				<div class="contacts_box__more">
					<p class="contacts_info">Наш адрес:</p>
					<small>Москва, Мясницкий проезд, 41</small>

					<p class="contacts_info">Номер телефона:</p>
					<a href="tel:8(961)996-25-03">8(961)996-25-03</a>

					<p class="contacts_info">E-mail:</p>
					<a href="mailto:gruz-kitai@gmail.com">gruz-kitai@gmail.com</a>

					<p class="contacts_info">Мы в соцсетях:</p>
					<div class="contacts_icons">
						<a href="#"><img src="img/contacts/vk.svg" alt=""></a>
						<a href="#"><img src="img/contacts/facebook.svg" alt=""></a>
						<a href="#"><img src="img/contacts/insta.svg" alt=""></a>
					</div>

				</div>
			</div>
			
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.405868871784!2d37.64473561597939!3d55.76882248055763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636f5750e9%3A0x7230915e06cee42!2z0JzRj9GB0L3QuNGG0LrQuNC5INC_0YAt0LQsIDQxLCDQnNC-0YHQutCy0LAsIDEwNzA3OA!5e0!3m2!1sru!2sru!4v1555833743672!5m2!1sru!2sru" allowfullscreen></iframe>
		</div>

	</section>

	<?php include('form.php'); ?>

	<?php include('footer.php'); ?>
	
</body>
</html>