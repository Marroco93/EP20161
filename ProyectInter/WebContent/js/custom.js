/**
 * 
 */
$(document).ready(function() {
	$('#gestionAcademica').click(function() {
		$.ajax({
			url : 'gestionAcademica.jsp',
			success : function(data) {
				$('#asideBase').html(data);
				$('#aside div').slideDown(1000);
			}
		});
		$.ajax({
			url : 'blank.jsp',
			success : function(data) {
				$('#seccionBase').html(data);
				$('#seccion div').slideDown(1000);
			}
		});
	});
	$('#gestionEventos').click(function() {
		$.ajax({
			url : 'gestionEventos.jsp',
			success : function(data) {
				$('#asideBase').html(data);
				$('#aside div').slideDown(1000);
			}
		});
		$.ajax({
			url : 'blank.jsp',
			success : function(data) {
				$('#seccionBase').html(data);
				$('#seccion div').slideDown(1000);
			}
		});
	});
	$('#gestionContable').click(function() {
		$.ajax({
			url : 'gestionContable.jsp',
			success : function(data) {
				$('#asideBase').html(data);
				$('#aside div').slideDown(1000);
			}
		});
		$.ajax({
			url : 'blank.jsp',
			success : function(data) {
				$('#seccionBase').html(data);
				$('#seccion div').slideDown(1000);
			}
		});
	});
	$('.agregarProfesor').click(function() {
		if ($($('body'))) {
			$.ajax({
				url : 'agregarProfesor.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'agregarProfesor.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('.agregarAlumno').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'agregarAlumno.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'agregarAlumno.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}

	});
	$('.agregarCurso').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'agregarCurso.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'agregarCurso.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('.agregarSeccion').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'agregarSeccion.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'agregarSeccion.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}

	});
	$('#asignarAlumnosASeccion').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'asignarAlumnosASeccion.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'asignarAlumnosASeccion.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#asignarNotasAlumnoSeccion').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'asignarNotasAlumnoSeccion.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'asignarNotasAlumnoSeccion.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#confirmar').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'confirmarProfesor.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'confirmarProfesor.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#editarAlumno').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'editarAlumno.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'editarAlumno.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#editarCurso').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'editarCurso.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'editarCurso.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#editarProfesor').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'editarProfesor.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'editarProfesor.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#editarSeccion').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'editarSeccion.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'editarSeccion.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#listaAlumnos').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'listaAlumnos.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'listaAlumnos.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#listaCursos').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'listaCursos.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'listaCursos.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#listaProfesores').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'listaProfesores.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'listaProfesores.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#listaSecciones').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'listaSecciones.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'listaSecciones.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#verAlumno').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'verAlumno.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'verAlumno.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#verCurso').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'verCurso.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'verCurso.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#verProfesor').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'verProfesor.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'verProfesor.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});
	$('#verSeccion').click(function() {
		if ($('body')) {
			$.ajax({
				url : 'verSeccion.jsp',
				success : function(data) {
					$('#seccionBase').html(data);
					$('#seccionBase div').slideDown(1000);
				}
			});
		} else {
			$.ajax({
				url : 'verSeccion.jsp',
				success : function(data) {
					$('#divDinamico').html(data);
					$('#divDinamico div').slideDown(1000);
				}
			});
		}
	});

});