<?php

	$filename = $_FILES['file']['name'];
	$tmpname = $_FILES['file']['tmp_name'];
	$folder = 'uploads/';
	
	$json = array();
	if(move_uploaded_file($tmpname, $folder.$filename)){
		$json['success'] = 'Enviado com sucesso';
	}else{
		$json['error'] = 'Erro ao enviar';

	}
	
	exit(json_encode($json));