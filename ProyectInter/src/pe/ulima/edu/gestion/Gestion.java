package pe.ulima.edu.gestion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import pe.ulima.edu.beans.Alumnos;

public class Gestion {

    String url = "jdbc:mysql://localhost:3306/parcial?user=root&password=";
    
    public Connection getConnection() {
        Connection con = null;
        try {
            // PASO 2 Cargar el driver
            Class.forName("com.mysql.jdbc.Driver");
            // PASO 3 : Obtener la conexion
            con = DriverManager.getConnection(url);
            
        } catch (ClassNotFoundException ex) {
            System.out.println("Verifica que el nombre del driver este OK !");
            System.out.println("Verifica que driver este en tu classpath !");
        } catch (SQLException ex) {
            System.out.println("Verifica que tu URL sea correcto !");
            System.out.println("Verifica que tus credenciales sea correctas !");
        }
        return con;
    }
	
    //Falta validar que el dni no sea repetido(usar query)
    public void insertaDatos(String nombre, String apellidop, String apellidom, 
    		int dni, int codigo, String url, String colegio) {
        Connection con = null;
        String sql1 = "INSERT INTO alumnos VALUES(?, ? ,?, ?, ? ,?, ?)";
        
        
        PreparedStatement stmt1 = null;
        
        try {
            //Obtener la conexion
            con = getConnection();
            //Abrir la transaccion TRX
            con.setAutoCommit(false);
            //Preparar sentencias
            stmt1 = con.prepareStatement(sql1);
            
            //recorrer los datos
            
                //Insertar al alumno
                stmt1.setString(1, nombre);
                stmt1.setString(2, apellidop);
                stmt1.setString(3, apellidom);
                stmt1.setInt(4, dni);
                stmt1.setInt(5, codigo);
                stmt1.setString(6, url);
                stmt1.setString(7, colegio);
                //Procedo a insertar
                stmt1.executeUpdate();
             
            //Si todo paso OK... Commit
            con.commit();
        } catch (SQLException ex) {
            try{
                con.rollback();
            }catch(SQLException ex1){
                ex.printStackTrace();
            }
            
            
        }finally{
            try{
                stmt1.close();
                
                con.close();
            }catch(SQLException ex){
                ex.printStackTrace();
            }
        }
        
        
        
    }
    
    //Metodo para obetener los colegios
    public List<String> getColegios() {
    	List<String> rpta = new ArrayList<>();
        Connection con = null;
        String sql = "SELECT * FROM colegios";
        Statement stmt = null;
        ResultSet rs = null;
        
        
        // Obtener la conexion
        con = getConnection();

        
        
    try {
        stmt = con.createStatement();

        rs = stmt.executeQuery(sql);
       
        while ( rs.next() ) {
            String colegio = rs.getString(2);
            
            
            
            rpta.add(colegio);
        }
        
    } catch (SQLException ex) {
        ex.printStackTrace();
    } finally {
        // Cerrar todo
        try {
            rs.close();
            stmt.close();
            con.close();
        } catch ( Exception e) {}
    }
    return rpta;
} 
  //Obtener los datos de los alumnos  con lo colegios
    public List<Alumnos> getAlumno() {
    	List<Alumnos> rpta = new ArrayList<>();
        Connection con = null;
        String sql = "SELECT * FROM alumnos";
        String sql2 = "SELECT * FROM colegios where id = ?";
        PreparedStatement stmt = null;
        PreparedStatement stmt2 = null;
        ResultSet rs = null;
        
        ResultSet rs2 = null;
        
        
        // Obtener la conexion
        con = getConnection();

        String colegiosfin="";
        
    try {
    	stmt = con.prepareStatement(sql);
        stmt2 = con.prepareStatement(sql2);
        
        rs = stmt.executeQuery(sql);
       
        while ( rs.next() ) {
            
            
            String nombre = rs.getString(2);
            String apellidop = rs.getString(3);
            String apellidom = rs.getString(4);
            int dni = rs.getInt(5);
            String url = rs.getString(6);
            int codigo = rs.getInt(7);
            int colegioint = rs.getInt(8);
            
            stmt2.setInt(1, colegioint);
            rs2 = stmt2.executeQuery();
            
            while(rs2.next()){
            	String colegio = rs2.getString(2);
            	colegiosfin=colegio;
            }
            Alumnos alum = new Alumnos (nombre, apellidop, apellidom, dni, url,codigo, colegiosfin);
            
            rpta.add(alum);
        }
        
    } catch (SQLException ex) {
        ex.printStackTrace();
    } finally {
        // Cerrar todo
        try {
        	 stmt.close();
             
             stmt2.close();
            con.close();
        } catch ( Exception e) {}
    }
    return rpta;
} 
    //falta eliminar alumnos
    
    /*
      UPDATE table_name
SET column1=value1,column2=value2,...
WHERE some_column=some_value;
     */
     
}
