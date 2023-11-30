var wms_layers = [];

var format_Petatutupanlahancitanduy_0 = new ol.format.GeoJSON();
var features_Petatutupanlahancitanduy_0 = format_Petatutupanlahancitanduy_0.readFeatures(json_Petatutupanlahancitanduy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Petatutupanlahancitanduy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Petatutupanlahancitanduy_0.addFeatures(features_Petatutupanlahancitanduy_0);
var lyr_Petatutupanlahancitanduy_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Petatutupanlahancitanduy_0, 
                style: style_Petatutupanlahancitanduy_0,
                interactive: true,
    title: 'Peta tutupan lahan citanduy<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_0.png" /> Badan Air<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_1.png" /> Bandara / Pelabuhan<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_2.png" /> Belukar<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_3.png" /> Belukar Rawa<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_4.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_5.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_6.png" /> Hutan Mangrove Sekunder<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_7.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_8.png" /> Pemukiman<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_9.png" /> Perkebunan<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_10.png" /> Pertambangan<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_11.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_12.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_13.png" /> Sawah<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_14.png" /> Tambak<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_15.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/Petatutupanlahancitanduy_0_16.png" /> <br />'
        });

lyr_Petatutupanlahancitanduy_0.setVisible(true);
var layersList = [lyr_Petatutupanlahancitanduy_0];
lyr_Petatutupanlahancitanduy_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', 'layer': 'layer', 'path': 'path', });
lyr_Petatutupanlahancitanduy_0.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Petatutupanlahancitanduy_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Petatutupanlahancitanduy_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});