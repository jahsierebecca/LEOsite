 $(document).ready(function() { 

var $aboutButton = $("#about-button");
var $collabButton = $("#collab-button");
var $showsButton = $("#shows-button");
var $galleryButton = $("#gallery-button");
var $mainBanner = $("#main-banner");

var $showsBanner = $("#shows-banner");
var $aboutBanner = $("#about-banner");
var $collabBanner = $("#collab-banner");
var $galleryBanner = $("#gallery-banner");
var $defaultBanner = $("#default-banner");
var $home = $("header");


$home.click(function () {
	$(".banner").addClass("hidden");
	// $clear();
	$defaultBanner.removeClass("hidden");
});

$showsButton.click(function () {
	$(".banner").addClass("hidden");
	// $clear();
	$showsBanner.removeClass("hidden");
});

$collabButton.click(function () {
	$(".banner").addClass("hidden");
	$collabBanner.removeClass("hidden");
});

$aboutButton.click(function () {
	$(".banner").addClass("hidden");
	$aboutBanner.removeClass("hidden");
});

$galleryButton.click(function () {
	$(".banner").addClass("hidden");
	$galleryBanner.removeClass("hidden");
});

$("#foo").slideme({
arrows: true,
// pagination: "numbers",
resizable: {
width: 100%;
height: 300px;
}
});



});