const sidebarBackground = {
  default: '#2C2C2C', // Volvemos a un fondo oscuro para mejor contraste
  success: '#aec437', // Verde claro de tu paleta
  notice: '#efa024', // Naranja de tu paleta
  warning: '#efa024', // Naranja de tu paleta
  danger: '#ff5631', // Mantenemos un rojo para mejor distinción
  surprise: '#1e7d3e', // Verde oscuro de tu paleta
  info: '#aec437', // Verde claro de tu paleta
};

export default {
  name: 'default',
  displayName: 'Default',
  theme: {
    background: sidebarBackground,
    foreground: {
      default: '#e0e0e0', // Texto principal más claro
    },
    styles: {
      transparentOverlay: {
        background: {
          default: 'rgba(30, 30, 30, 0.8)', // Fondo semi-transparente oscuro
        },
        foreground: {
          default: '#e0e0e0',
        },
      },
      dialog: {
        background: {
          default: '#2a2a2a', // Fondo de diálogos oscuro
        },
      },
      appHeader: {
        background: {
          default: '#1e7d3e', // Cabecera de la aplicación (verde oscuro)
        },
      },
      sidebar: {
        background: sidebarBackground,
        foreground: {
          default: '#e0e0e0', // Texto del sidebar
        },
        highlight: {
          default: '#efa024', // Resaltado en naranja
        },
      },
      sidebarHeader: {
        background: {
          default: '#1e7d3e', // Cabecera del sidebar (verde oscuro)
        },
        foreground: {
          default: '#ffffff', // Texto en la cabecera del sidebar
        },
      },
      paneHeader: {
        foreground: {
          default: '#e0e0e0', // Texto en la cabecera del panel
        },
        background: {
          default: '#212121', // Fondo base del encabezado del panel
          success: '#aec437', // Éxito - verde claro
          notice: '#efa024', // Aviso - naranja
          warning: '#efa024', // Advertencia - naranja
          danger: '#ff5631', // Peligro - rojo
          surprise: '#1e7d3e', // Sorpresa - verde oscuro
          info: '#aec437', // Información - verde claro
        },
      },
      pane: {
        background: {
          ...sidebarBackground,
          default: '#292929', // Fondo del panel principal oscuro
        },
        foreground: {
          default: '#e0e0e0', // Texto en el panel
        },
        highlight: {
          default: '#efa024', // Resaltado en naranja
        },
      },
    },
  },
};