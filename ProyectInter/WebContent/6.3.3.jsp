<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="UTF-8" />
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
	<title>Cerrar Sesion</title>
	<style type="text/css">
		#parent {
		  display: flex;
		}
		#narrow {
		  width: 200px;
		}
		#wide {
		  flex: 1;
		}
	</style>
</head>
<body class="container">
	<table class="table">
		<thead>
			<tr>
				<th><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/ULIMA_logo.png" width="50" /></th>
				<th><span style="color:#FFA500;">Gesti&oacute;n Acad&eacute;mica</span></th>
				<th>Gesti&oacute;n de Eventos</th>
				<th>Gesti&oacute;n Contable</th>
				<th><img height="20" src="http://images.gofreedownload.net/button-log-off-28802.jpg" width="20" />&nbsp;Cerrar Sesi&oacute;n&nbsp;</th>
			</tr>
		</thead>
	</table>
	
	<div id="parent">
	<div style="display:inline-block" id="narrow"><img height="25" src="http://www.approxstore.com/292-thickbox_default/maletin-para-portatil-de-hasta-11-naranja.jpg" width="25" /> <span style="color:#FFA500;"><label>Gesti&oacute;n de Profesores</label></span>
	
	<ul class="list-group">
		<li class="list-group-item" style="border: 0">>> Agregar Profesor</li>
		<li class="list-group-item" style="border: 0">>> Ver Lista de Profesores</li>
	</ul>
	<img height="25" src="https://image.freepik.com/iconos-gratis/cara-emoticon-serio_318-67943.png" width="25" /> <span style="color:#FFA500;"><label>Gesti&oacute;n de Alumno</label></span>
	
	<ul class="list-group">
		<li class="list-group-item" style="border: 0">>> Agregar Alumno</li>
		<li class="list-group-item" style="border: 0">>> Ver Lista de Alumnos</li>
	</ul>
	<img height="25" src="http://s3-sa-east-1.amazonaws.com/tailoy-productos/2014/020768.jpg" width="25" /> <span style="color:#FFA500;"><label>Gesti&oacute;n de Asignaturas</label></span>
	
	<ul class="list-group">
		<li class="list-group-item" style="border: 0">>> Agregar Curso</li>
		<li class="list-group-item" style="border: 0">>> Ver Lista de Cursos</li>
		<li class="list-group-item" style="border: 0">>> Agregar Secci&oacute;n</li>
		<li class="list-group-item" style="border: 0">>> Ver Lista de Secciones</li>
	</ul>
	</div>
	
	<div style="display:inline-block" id="wide">
		<span style="color:#FFA500;"><label>Gesti&oacute;n de Profesores / Ver Curso</label></span>
		<div>
			<table class="table">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Código</th>
						<th>Carrera</th>
					</tr>
				<thead>
				<tbody>
					<tr>
						<td><input type="text" class="form-control" value="Programación Internet"></td>
						<td><input type="text" class="form-control" value="65713"></td>
						<td><select class="form-control"> 
							<option value="1">Ingeniería de Sistemas</option>
							<option value="2">Ingeniería Industrial</option>
							<option value="3">Derecho</option>
						</select></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	</div>
</body>
</html>