var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET oden_zubin page. */
router.get('/oden_zubin', function(req, res, next) {
  res.render('oden_zubin', { title: 'O DENISE ZUBINE' });
});

router.get('/dz_video', function(req, res, next) {
  res.render('dz_video', { title: 'DZ VIDEO' });
});

router.get('/dz_foto', function(req, res, next) {
  res.render('dz_foto', { title: 'DZ FOTO' });
});

router.get('/dz_reviews', function(req, res, next) {
  res.render('dz_reviews', { title: 'DZ ОТЗЫВЫ' });
});



router.get('/dz_wedding', function(req, res, next) {
  res.render('dz_wedding', { title: 'DZ СВАДЕБНЫЕ УСЛУГИ' });
});

router.get('/dz_visiting', function(req, res, next) {
  res.render('dz_visiting', { title: 'DZ ВЫЕЗДНАЯ ЦЕРЕМОНИЯ' });
});

router.get('/dz_anniversary', function(req, res, next) {
  res.render('dz_anniversary', { title: 'DZ ЮБИЛЕЙ' });
});

router.get('/dz_corporate', function(req, res, next) {
  res.render('dz_corporate', { title: 'DZ КОРПОРОТИВ' });
});

router.get('/dz_nyear', function(req, res, next) {
  res.render('dz_nyear', { title: 'DZ НОВЫЙ ГОД' });
});

router.get('/dz_prom', function(req, res, next) {
  res.render('dz_prom', { title: 'DZ ВЫПУСКНОЙ ВЕЧЕР' });
});

router.get('/dz_children', function(req, res, next) {
  res.render('dz_children', { title: 'DZ ДЕТСКИЙ ПРАЗДНИК' });
});

router.get('/dz_videography', function(req, res, next) {
  res.render('dz_videography', { title: 'DZ ВИДЕОСЪЕМКА' });
});

router.get('/dz_eventorganisation', function(req, res, next) {
  res.render('dz_eventorganisation', { title: 'DZ ОРГАНИЗАЦИЯ СВАДЕБ' });
});

router.get('/dz_photographer', function(req, res, next) {
  res.render('dz_photographer', { title: 'DZ ОРГАНИЗАЦИЯ СВАДЕБ' });
});

router.get('/dz_saxophone', function(req, res, next) {
  res.render('dz_saxophone', { title: 'DZ Саксафонист' });
});

router.get('/dz_dj', function(req, res, next) {
  res.render('dz_dj', { title: 'DZ Dj' });
});

router.get('/dz_vocalists', function(req, res, next) {
  res.render('dz_vocalists', { title: 'DZ Вокалисты' });
});

router.get('/dz_coverBands', function(req, res, next) {
  res.render('dz_coverBands', { title: 'DZ Кавер группы' });
});

router.get('/dz_hostes', function(req, res, next) {
  res.render('dz_hostes', { title: 'DZ Хостес' });
});

router.get('/dz_contact', function(req, res, next) {
  res.render('dz_contact', { title: 'Контакты' });
});

router.get('/dz_contact', function(req, res, next) {
  res.render('dz_contact', { title: 'Контакты' });
});

router.get('/new_prolect', function(req, res, next) {
  res.render('new_prolect', { title: 'DZ Молодежная свадьба' });
});

router.get('/dz_weddingDecor', function(req, res, next) {
  res.render('dz_weddingDecor', { title: 'DZ Оформление свадеб' });
});

router.get('/denis_zybin', function(req, res, next) {
  res.render('denis_zybin', { title: 'DZ - Денис Зыбин' });
});

router.get('/dz_rap', function(req, res, next) {
  res.render('dz_rap', { title: 'DZ Шоу программа RAP' });
});

router.get('/mc_zybin', function(req, res, next) {
  res.render('mc_zybin', { title: 'DZ Услуги МС-Зыбина' });
});


router.get('/dz_thieves', function(req, res, next) {
  res.render('dz_thieves', { title: 'Шоу программа Похитители' });
});

router.get('/dz_grandmotherSiranush', function(req, res, next) {
  res.render('dz_grandmotherSiranush', { title: 'Шоу программа Бабушка Сирануш' });
});

router.get('/revolution_team', function(req, res, next) {
  res.render('revolution_team', { title: 'Revolution Team' });
});

router.get('/dz_cake', function(req, res, next) {
  res.render('dz_cake', { title: 'Шоу программа Казус с тортом' });
});


module.exports = router;
