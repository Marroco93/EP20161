package pe.ulima.edu.beans.copy;

public class Alumnos {

	private String nombre;
	private String apellidop;
	private String apellidom;
	private int dni;
	private String url;
	private int codigo;
	private String colegio;
	public Alumnos(String nombre, String apellidop, String apellidom, int dni, String url, int codigo, String colegio) {
		super();
		this.nombre = nombre;
		this.apellidop = apellidop;
		this.apellidom = apellidom;
		this.dni = dni;
		this.url = url;
		this.codigo = codigo;
		this.colegio = colegio;
	}
	
	public Alumnos() {
		super();
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidop() {
		return apellidop;
	}

	public void setApellidop(String apellidop) {
		this.apellidop = apellidop;
	}

	public String getApellidom() {
		return apellidom;
	}

	public void setApellidom(String apellidom) {
		this.apellidom = apellidom;
	}

	public int getDni() {
		return dni;
	}

	public void setDni(int dni) {
		this.dni = dni;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getColegio() {
		return colegio;
	}

	public void setColegio(String colegio) {
		this.colegio = colegio;
	}
	
	
}
	
	