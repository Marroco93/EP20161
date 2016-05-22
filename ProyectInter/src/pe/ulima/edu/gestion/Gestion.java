package pe.ulima.edu.gestion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Gestion {

    String url = "jdbc:mysql://localhost:3306/progra20160?user=root&password=";
    
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
	
	
}
