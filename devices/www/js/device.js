$('#deviceProperties').hide();

$('#boton').bind('click', function(event){

	$('#deviceProperties').show();

    var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                        'Device Cordova: '  + device.cordova  + '<br />' +
                        'Device Platform: ' + device.platform + '<br />' +
                        'Device UUID: '     + device.uuid     + '<br />' +
                        'Device Model: '    + device.model    + '<br />' +
                        'Device Version: '  + device.version  + '<br />';
    event.preventDefault();
});
