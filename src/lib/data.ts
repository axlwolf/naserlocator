
import type { Branch, BranchStatus, Service } from './types';

const rawData = {
  "empresa": "Grupo Naser",
  "descripcion": "Red Funeraria con cobertura Nacional e Internacional",
  "corporativo": {
    "direccion": "Av. División del Norte # 2566, Col. San Diego Churubusco",
    "codigo_postal": "04120",
    "ciudad": "CDMX",
    "telefono": "55-56-88-78-66"
  },
  "agencias_propias": [
    {
      "nombre": "Agencia Funeraria Naser Aragón",
      "direccion": "Benito Juárez # 61, Col. San Juan de Aragón",
      "codigo_postal": "07950",
      "ciudad": "CDMX",
      "telefonos": ["55 5760 1317", "55 5760 1249", "55 5551 8161"],
      "email": "funerariaaragon@naser.com.mx",
      "servicios": [
        "Servicio 24 horas los 365 días del año",
        "Cinco modernas, privadas y cómodas capillas de velación",
        "Sala de embalsamamiento",
        "Sala de exhibición",
        "Servicio de cremación",
        "Carrozas nuevas y equipadas",
        "Autobús propio de acompañamiento",
        "Traslados nacionales e internacionales",
        "Área de servicios (WC)",
        "Acceso para discapacitados"
      ]
    },
    {
      "nombre": "Agencia Funeraria Naser Morelos",
      "direccion": "Av. Domingo Diez # 203, Col. Del Empleado",
      "codigo_postal": "62250",
      "ciudad": "Cuernavaca, Morelos",
      "telefonos": ["777 311 92 23", "777 311 92 24", "777 311 92 25"],
      "email": "funerariamorelos@naser.com.mx",
      "servicios": [
        "Servicio 24 horas los 365 días del año",
        "Tres modernas, privadas y cómodas capillas de velación",
        "Sala de embalsamamiento",
        "Sala de exhibición",
        "Servicio de cremación",
        "Carrozas nuevas y equipadas",
        "Autobús propio de acompañamiento",
        "Traslados nacionales e internacionales",
        "Área de servicios (WC)",
        "Acceso para discapacitados",
        "Cafetería y teléfonos"
      ]
    },
    {
      "nombre": "Agencia Funeraria Naser Oaxaca",
      "direccion": "Calz. Héroes de Chapultepec # 1125, Col. Reforma",
      "codigo_postal": "68050",
      "ciudad": "Oaxaca de Juárez, Oaxaca",
      "telefono": "951-518 73 35"
    },
    {
      "nombre": "Agencia Funeraria Naser Tlalpan",
      "direccion": "Calzada de Tlalpan, #1145, Local A, Col. San Simón Ticumac, Alc. Benito Juárez",
      "codigo_postal": "03660",
      "ciudad": "CDMX",
      "telefonos": ["55 2065 1669", "55 5532 9179"]
    }
  ],
  "cobertura_estados": {
    "aguascalientes": {
      "ciudades": {
        "aguascalientes": [
          {
            "nombre": "Recinto Funerario Los Encinos",
            "direccion": "Av. José María Chávez #1111-B, Fraccionamiento Lindavista",
            "telefono": "449 913-32-32"
          },
          {
            "nombre": "Funeraria y Crematorio La Gloria",
            "direccion": "Calle Guadalupe #527, Barrio de Guadalupe",
            "telefono": "449 915 8024 / 48"
          }
        ],
        "pabellon_de_arteaga": [
          {
            "nombre": "Funeraria y Crematorio La Gloria",
            "direccion": "Av. Sebastián Lerdo de Tejada #13, Industrial 20660",
            "telefono": "465 958 0481"
          },
          {
            "nombre": "Recinto Funerario Los Encinos",
            "direccion": "Av. José María Chávez #1111-B, Fraccionamiento Lindavista",
            "telefono": "449 913-32-32",
            "tipo_servicio": "Solo a domicilio"
          }
        ]
      },
      "municipios_cobertura": [
        "Rincón de Romos", "San Francisco de los Romos", "Asientos", "Cosío", 
        "Tepezalá", "San José de Gracia", "Calvillo", "El Llano", "Jesús María"
      ]
    },
    "baja_california_norte": {
      "ciudades": {
        "ensenada": [
          {
            "nombre": "Funeraria El Ángel",
            "direccion": "Av. Esmeralda # 642-A, Fracc. Valle Dorado",
            "telefonos": ["646 176-29-20", "646 176-54-20", "646 177-92-15"]
          }
        ],
        "mexicali": [
          {
            "nombre": "Funeraria Santa Elena",
            "direccion": "Av. Reforma # 902, Col. Centro",
            "telefonos": ["686 552-83-44", "686 552-96-67"]
          }
        ],
        "tijuana": [
          {
            "nombre": "Agencia de Inhumaciones González",
            "direccion": "Av. D Miguel F. Martínez # 958 entre 3a. y 4a., Col. Centro",
            "telefonos": ["664 685-33-16", "664 685-33-17", "01-800-626-10-45"]
          }
        ]
      }
    },
    "baja_california_sur": {
      "ciudades": {
        "cabo_san_lucas": [
          {
            "nombre": "Funeraria Salas",
            "direccion": "Ejido esquina I. Verde, Coronel El Arenal",
            "telefono": "624 176-37-22"
          }
        ],
        "ciudad_constitucion": [
          {
            "nombre": "Funeraria Mar de Cortez",
            "direccion": "Calle D s/n, Coronel San Martín",
            "telefono": "624 109-10-15"
          }
        ],
        "la_paz": [
          {
            "nombre": "Misión Funerales del Carmen (Moreh Inhumaciones)",
            "direccion": "Abasolo y Cuauhtémoc # 465, Coronel El Manglito",
            "telefonos": ["612 122-11-91", "612 122-19-31"]
          }
        ],
        "loreto": [
          {
            "nombre": "Funeraria Mar de Cortez",
            "direccion": "Avenida Golfo de California s/n, Coronel Miramar",
            "telefono": "613 100-36-36"
          }
        ],
        "mulege": [
          {
            "nombre": "Funeraria Mar de Cortez",
            "direccion": "Carretera Transpeninsular s/n, Col. Centro",
            "telefono": "615 100-05-00"
          }
        ],
        "san_jose_del_cabo": [
          {
            "nombre": "Funeraria Salas",
            "direccion": "Venustiano Carranza No. 2340 esquina Carretera Transpeninsular, Col. San José Viejo",
            "telefono": "624 146-09-83"
          }
        ]
      }
    },
    "campeche": {
      "ciudades": {
        "campeche": [
          {
            "nombre": "Jardines del Ángel",
            "direccion": "Calle 51 # 31 entre 10a. y 12a., Col. Centro",
            "telefonos": ["981 811-03-20", "981 811-04-44", "981 816-37-58"]
          }
        ],
        "ciudad_del_carmen": [
          {
            "nombre": "Funerales Reyes",
            "direccion": "Calle 37 y 40 # 80, Col. Tila",
            "telefonos": ["938 382-07-76", "938 382-35-98", "938 382-35-20", "938 382-35-32"]
          }
        ]
      }
    },
    "cdmx": {
      "ciudades": {
        "aragon": [
          {
            "nombre": "Agencia Funeraria Naser Aragón",
            "direccion": "Benito Juarez # 61, San Juan de Aragón",
            "telefonos": ["55 5760 1317", "55 5760 1249", "55 5551 8161"]
          }
        ],
        "tlalpan": [
          {
            "nombre": "Agencia Funeraria Naser Tlalpan",
            "direccion": "Calzada de Tlalpan, #1145, Local A, Col. San Simón Ticumac, Alc. Benito Juárez",
            "codigo_postal": "03660",
            "telefonos": ["55 2065 1669", "55 5532 9179"]
          }
        ]
      }
    },
    "chiapas": {
      "ciudades": {
        "comitan": [
          {
            "nombre": "Funerales Rodríguez Hermanos",
            "direccion": "5a. Calle Sur Ote. # 30, Col. Centro",
            "telefono": "963 632-07-53",
            "celular": "963 635-98-49"
          },
          {
            "nombre": "La Piedad Servicios Funerarios",
            "direccion": "Priv. de los Pinos # 1, Calz. del Panteón",
            "telefono": "963 632-51-31"
          }
        ],
        "san_cristobal_de_las_casas": [
          {
            "nombre": "Funerales y Velatorios Vima Dimo",
            "direccion": "Real de Mexicanos # 40, Bo. de Mexicanos",
            "telefonos": ["967 678-89-43", "967 678-88-76"]
          }
        ],
        "tapachula": [
          {
            "nombre": "Funerales Bravo",
            "direccion": "2a. Av. Sur # 85 esq. 8 Pte., Col. Centro",
            "telefonos": ["962 625-29-67", "962 625-27-52"]
          }
        ],
        "tuxtla_gutierrez": [
          {
            "nombre": "Funeraria Jardines del Edén",
            "direccion": "Boulevard San Cristóbal # 130, Col. Moctezuma",
            "telefono": "961 615-59-58"
          }
        ]
      }
    },
    "chihuahua": {
      "ciudades": {
        "chihuahua": [
          {
            "nombre": "Inhumaciones San Felipe",
            "direccion": "AV. División del Norte # 2102, Col. Altavista",
            "telefonos": ["614 426-67-87", "614 426-67-97", "614 413-54-54", "01-800-830-13-53"]
          }
        ],
        "cd_delicias": [
          {
            "nombre": "Funeraria Rodríguez de Delicias",
            "direccion": "AV. 3a. Norte#109, Col. Centro",
            "telefonos": ["639 472-00-26", "639 472-04-95"]
          }
        ],
        "cd_juarez": [
          {
            "nombre": "Funerales Acosta",
            "direccion": "AV. de la Raza#3124, Col. Partido Escobedo",
            "telefonos": ["656 616-80-37", "656 616-45-81"]
          }
        ],
        "hidalgo_del_parral": [
          {
            "nombre": "Agencia de Inhumaciones Loya",
            "direccion": "Flores Magón # 44, Col. Centro",
            "telefonos": ["627 522-00-39", "627 522-20-39"]
          }
        ]
      }
    },
    "coahuila": {
      "ciudades": {
        "cd_acuna": [
          {
            "nombre": "Funeraria Flores",
            "direccion": "Bravo # 205 Sur, Col. Centro",
            "telefonos": ["877 772-50-47", "877 772-50-13"]
          }
        ],
        "frontera": [
          {
            "nombre": "Funerales Marsan",
            "direccion": "5 de Mayo#127, Col. Centro",
            "telefono": "866 634-30-35"
          }
        ],
        "monclova": [
          {
            "nombre": "Funerales Marsan",
            "direccion": "Hidalgo y Garita # 513 Sur, Col. Centro",
            "telefonos": ["866 633-13-85", "866 633-08-88"]
          }
        ],
        "nueva_rosita": [
          {
            "nombre": "Funerales Modernos",
            "direccion": "V. Carranza y Victoria # 126, Col. Centro",
            "telefonos": ["861 614-10-52", "861 614-77-77"]
          }
        ],
        "piedras_negras": [
          {
            "nombre": "Funerales González",
            "direccion": "AV. 16 de septiembre#209, Col. Las Fuentes",
            "telefonos": ["878 782-14-15", "878 782-31-90"]
          }
        ],
        "ramos_arizpe": [
          {
            "nombre": "Funerales Martínez",
            "direccion": "Pedro Gil Farías # 114, Coronel Eulalio Gutiérrez",
            "telefono": "844 488-08-44"
          }
        ],
        "sabinas": [
          {
            "nombre": "Funerales García",
            "direccion": "Lamadrid Pte. # 259, Col. Centro",
            "telefonos": ["861 612-03-21", "861 612-13-26"]
          }
        ],
        "saltillo": [
          {
            "nombre": "Funerales Martínez",
            "direccion": "Hidalgo Norte # 262 esq. aldama, Col. Centro",
            "telefonos": ["844 414-90-53", "844 414-44-44", "844 414-41-85", "844 414-45-53", "800-890-85-85"]
          }
        ],
        "san_pedro": [
          {
            "nombre": "Funerales San Francisco de Asís",
            "direccion": "Fco. I. Madero # 79, Col. Centro",
            "telefono": "872 772-05-25"
          }
        ],
        "torreon": [
          {
            "nombre": "Jardines Puerta del Cielo",
            "direccion": "Boulevard Francisco González de la Vega #403 Edificio A, Col. Parque Industrial Lagunero, Gómez Palacio, Durango",
            "codigo_postal": "35070",
            "telefono": "01-871-757-4248"
          }
        ]
      }
    },
    "colima": {
      "ciudades": {
        "colima": [
          {
            "nombre": "Funeraria y Crematorio Magaña",
            "direccion": "San Fernando #246, Col. Filomeno Medina",
            "telefonos": ["312 314-24-40", "312 314-51-51"]
          }
        ],
        "manzanillo": [
          {
            "nombre": "Funeraria y Crematorio Magaña",
            "direccion": "San Fernando #246, Col. Filomeno Medina",
            "telefonos": ["312 314-24-40", "312 314-51-51"]
          }
        ]
      }
    },
    "durango": {
      "ciudades": {
        "durango": [
          {
            "nombre": "Misión Funeral Raúl Flores",
            "direccion": "Blvd. Dolores del Rio # 349 Norte, Col. Centro",
            "telefonos": ["618 128-43-83", "618 810-20-40", "618-170-0196"]
          }
        ],
        "tepehuanes": [
          {
            "nombre": "Misión Funeral Raúl Flores",
            "direccion": "Victoria # 11, Col. Centro",
            "telefono": "674 863-00-40"
          }
        ],
        "santiago_papasquiaro": [
          {
            "nombre": "Misión Funeral Raúl Flores",
            "direccion": "Vaca Ortiz # 113, Col. Centro",
            "telefono": "674 862-39-13"
          }
        ],
        "guanacevi": [
          {
            "nombre": "Misión Funeral Raúl Flores",
            "direccion": "Fco. I Madero # 20, Col. Centro",
            "telefonos": ["674 884-50-85", "618 128-43-83", "618 810-20-40"]
          }
        ],
        "gomez_palacio": [
          {
            "nombre": "Jardines Puerta del Cielo",
            "direccion": "Boulevard Francisco González de la Vega #403 Edificio A Col. Parque Industrial Lagunero",
            "codigo_postal": "35070",
            "telefono": "01-871-757-4248"
          }
        ]
      }
    },
    "estado_de_mexico": {
      "ciudades": {
        "atlacomulco": [
          {
            "nombre": "Funerales López",
            "direccion": "Av. Morelos # 200, Col. Centro",
            "telefono": "712 122-21-90"
          }
        ],
        "toluca": [
          {
            "nombre": "Funerales Zúñiga",
            "direccion": "Av. José María Pino Suárez # 311, Col. Santa Clara",
            "telefonos": ["722 214-28-68", "722 283-10-67", "722 215-97-68"]
          }
        ]
      }
    },
    "guanajuato": {
      "ciudades": {
        "celaya": [
          {
            "nombre": "Funeraria Vita Nova",
            "direccion": "Calle 12 de Octubre No. 310, Col. Nuevo Celaya",
            "telefonos": ["461 613-99-82", "461 612-00-88", "461 612-00-11"]
          }
        ],
        "guanajuato": [
          {
            "nombre": "Casa Funeraria Forasté Cepeda",
            "direccion": "Carr. Libre Guanajuato- Silao Km 5.5, Col. Marfil",
            "telefonos": ["473 734-66-10", "473 141-55-74"]
          }
        ],
        "irapuato": [
          {
            "nombre": "Nueva Vida Casa Funeraria",
            "direccion": "Blvd. Díaz Ordaz # 3829 esq. Guerrero, Col. La Reyna",
            "telefonos": ["462 627-75-55", "462 627-64-64"]
          }
        ],
        "leon": [
          {
            "nombre": "Grupo Ureña Funerarios",
            "direccion": "Juan Valle # 803 y 805, Col. San Juan de Dios",
            "telefonos": ["477 712-23-26", "477 707-13-62", "477 707-66-98"]
          }
        ],
        "salamanca": [
          {
            "nombre": "Nueva Vida Casa Funeraria",
            "direccion": "Faja de Oro # 500 esq. Colón, Col. Tamaulipas",
            "telefono": "464 647-03-30"
          }
        ],
        "san_miguel_de_allende": [
          {
            "nombre": "Funerales Minguela",
            "direccion": "Av. Primero de Mayo # 88, Fracc. Ignacio Ramírez",
            "telefono": "415 120-51-19"
          }
        ],
        "silao": [
          {
            "nombre": "Funerales Cabrera",
            "direccion": "Av. Álvaro Obregón # 55, Col. Centro",
            "telefono": "472 722-05-16"
          }
        ]
      }
    },
    "guerrero": {
      "ciudades": {
        "acapulco": [
          {
            "nombre": "Agencia Siglo XXI",
            "direccion": "Av. Ruiz Cortínez # 1942, Col. Burócratas",
            "telefonos": ["744 487-55-37", "744 487-2343", "744 440-0749"]
          }
        ],
        "chilpancingo": [
          {
            "nombre": "Funeraria San Antonio",
            "direccion": "Av. I. Zaragoza # 40, Col. Centro",
            "telefonos": ["747 472-25-25", "747 478-51-49"]
          }
        ],
        "iguala": [
          {
            "nombre": "Servicios Funerarios El Ángel",
            "direccion": "Av. Bandera Nacional # 48 esq. I. Allende, Col. Centro",
            "telefono": "733 332-65-95"
          }
        ]
      }
    },
    "hidalgo": {
      "ciudades": {
        "pachuca": [
          {
            "nombre": "Inhumaciones Arriaga",
            "direccion": "Arista # 324, Col. La Surtidora",
            "telefonos": ["771 714-03-45", "771 714-07-45"]
          }
        ],
        "tulancingo": [
          {
            "nombre": "Funerales Los Sauces",
            "direccion": "Carr. México -Tuxpan Km. 140 A-B, Col. Felipe Ángeles",
            "telefonos": ["775 753-47-61", "775 753-49-99"]
          }
        ]
      }
    },
    "jalisco": {
      "ciudades": {
        "cd_guzman": [
          {
            "nombre": "Funerales San José",
            "direccion": "Federico del Toro # 156, Col. Centro",
            "telefonos": ["341 412-15-02", "341 412-22-99"]
          }
        ],
        "guadalajara": [
          {
            "nombre": "Recinto del Buen Pastor",
            "direccion": "Av. La Paz # 1944, Col. Americana",
            "telefonos": ["333 826-55-62", "333 826-16-12"]
          },
          {
            "nombre": "Recinto de la Esperanza",
            "direccion": "Av. Américas # 225, Col. Ladrón de Guevara",
            "telefonos": ["333 616-58-09", "333 616-59-18"]
          },
          {
            "nombre": "Moreh Hernández",
            "direccion": "Av. Vallarta # 1700 esq. Simón Bolívar, Col. Americana",
            "telefono": "333 615-40-25"
          },
          {
            "nombre": "Recinto Funeral López",
            "direccion": "Av. Artesanos # 1197, Col. Oblatos",
            "telefonos": ["333 643-24-03 ext. 115", "333 649-15-00", "333 655-90-51 ext. 126"]
          }
        ]
      }
    },
    "michoacan": {
      "ciudades": {
        "apatzingan": [
          {
            "nombre": "Funerales Apatzingán",
            "direccion": "Emiliano Zapata # 27, Col. Bonifacio Moreno",
            "telefonos": ["453 534-00-57", "453 534-40-02"]
          },
          {
            "nombre": "Funerales San José",
            "direccion": "Lic. Manuel de Alderete y Soria # 385, Col. Centro",
            "telefono": "453 534-04-51"
          }
        ],
        "ario_de_rosales": [
          {
            "nombre": "Funeraria Álvarez",
            "direccion": "Av. Lázaro Cárdenas # 1, Col. Centro",
            "telefonos": ["434 342-19-20", "434 342-13-62"]
          }
        ],
        "jiquilpan": [
          {
            "nombre": "Servicios Funerarios SAMA",
            "direccion": "Profesor Fajardo #139, Col. Centro",
            "telefono": "353 533-08-94"
          }
        ],
        "la_piedad": [
          {
            "nombre": "Funerales Carmona",
            "direccion": "Av. Padre Hidalgo # 342, Local 3, Santa Ana Pacueco, Guanajuato",
            "codigo_postal": "36910",
            "telefonos": ["352 52 55 135", "352 122 5296"]
          }
        ],
        "lazaro_cardenas": [
          {
            "nombre": "Funerales de Jesús",
            "direccion": "Mariano Matamoros # 110, Col. Centro",
            "telefono": "753 537-13-77"
          }
        ],
        "maravatio": [
          {
            "nombre": "Funeraria y Salas Velatorios de Los Ángeles",
            "direccion": "Morelos #58, Col. Centro",
            "telefono": "447 478-13-34"
          }
        ],
        "morelia": [
          {
            "nombre": "Funeraria Santa Bárbara",
            "direccion": "Ignacio López Rayón # 94, Col. Centro",
            "telefonos": ["443 312-50-00", "044 443 279-35-92"]
          },
          {
            "nombre": "Misión Funeral La Paz",
            "direccion": "Trabajadores de Asentamientos Humanos # 115, Col. FOVISSSTE Santiaguito",
            "telefono": "443 312-55-02"
          }
        ],
        "patzcuaro": [
          {
            "nombre": "Funeraria Álvarez",
            "direccion": "Av. Lázaro Cárdenas # 1, Col. Centro",
            "telefonos": ["434 342-19-20", "434 342-13-62"]
          }
        ],
        "querendaro": [
          {
            "nombre": "Misión Funeral La Paz",
            "direccion": "Av. Álvaro Obregón # 1092, Col. Isaac Arriaga",
            "telefono": "443 312-55-02"
          }
        ],
        "uruapan": [
          {
            "nombre": "Funeraria San José",
            "direccion": "Av. Juárez #93, Col. Centro",
            "telefonos": ["452 528-59-58", "452 424-38-07"]
          }
        ],
        "yurecuaro": [
          {
            "nombre": "Funerales El Buen Pastor",
            "direccion": "16 de septiembre #90, Col. La Loma",
            "telefono": "356 568-21-57"
          }
        ],
        "zacapu": [
          {
            "nombre": "Funerales Mariscal",
            "direccion": "Av. Morelos # 705, Col. Centro",
            "telefonos": ["436 363-03-36", "436 363-58-26"]
          },
          {
            "nombre": "Funerales San José",
            "direccion": "Av. Morelos # 919, Col. Centro",
            "telefonos": ["436 363-03-36", "436 363-58-26"]
          }
        ],
        "zamora": [
          {
            "nombre": "Funerales San José",
            "direccion": "Avenida Juárez Poniente # 296, Col. Ramírez Zamora, Michoacán",
            "codigo_postal": "59620",
            "telefonos": ["351 515 1545", "351-517-1994", "351 131 0495"]
          }
        ],
        "zitacuaro": [
          {
            "nombre": "Funerarios del Puerto",
            "direccion": "Av. Hidalgo Ote. # 63, Col. Melchor Ocampo",
            "telefonos": ["715 153-67-96", "715 153-83-16", "715 156-84-01"]
          }
        ]
      }
    },
    "morelos": {
      "ciudades": {
        "cuernavaca": [
          {
            "nombre": "Agencia Funeraria Naser Morelos",
            "direccion": "Domingo Diez # 203, Col. El Empleado",
            "telefonos": ["777 311-92-23", "777 311-92-24", "777 311-92-25"]
          }
        ]
      }
    },
    "nayarit": {
      "ciudades": {
        "tepic": [
          {
            "nombre": "Funeraria Jardines de San Juan",
            "direccion": "Carretera Tepic – Miramar Km. 745, Tepic, Nayarit",
            "codigo_postal": "63114",
            "telefono": "311 218-2034"
          }
        ]
      }
    },
    "nuevo_leon": {
      "ciudades": {
        "monterrey": [
          {
            "nombre": "Capillas del Carmen",
            "direccion": "Av. Constitución # 951 Pte., Col. Centro",
            "telefonos": ["818 340-47-42", "818 344-54-44"]
          },
          {
            "nombre": "Funerales Dolores",
            "direccion": "Pino Suárez # 125 Nte., Col. Centro",
            "telefonos": ["818 342-22-02", "818 344-05-70"],
            "contacto": "Ing. Jorge Alberto Rodríguez Ramírez"
          }
        ]
      }
    },
    "oaxaca": {
      "ciudades": {
        "asuncion_de_nochixtlan": [
          {
            "nombre": "Funerales Diaz",
            "direccion": "Allende # 9, Col. Centro",
            "telefono": "951 522-01-94",
            "celulares": ["044 951 1974-298", "951 196-37-85", "951 527-06-57"]
          }
        ],
        "huajuapan_de_leon": [
          {
            "nombre": "Funerales El Buen Descanso",
            "direccion": "Carranza#29, Col. Centro",
            "telefonos": ["953 530-0824", "045 953 109-68-87", "953 593-8387", "953 530-08-24"]
          }
        ],
        "juchitan_de_zaragoza": [
          {
            "nombre": "Funeraria González",
            "direccion": "Calzada Emancipación 1-B, Col. Guichevere",
            "telefono": "971 715-0171",
            "celular": "971 117-3354"
          }
        ],
        "loma_bonita": [
          {
            "nombre": "Funerales Ersa",
            "direccion": "México esq. AV. Morelos",
            "celulares": ["281 869-51-35", "281 870-84-06"]
          }
        ],
        "matias_romero": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951-518-73-35"
          }
        ],
        "miahuatlan_de_porfirio_diaz": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951-518-73-35"
          }
        ],
        "oaxaca": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951-518-73-35"
          }
        ],
        "pinotepa_nacional": [
          {
            "nombre": "Funeraria Carmona",
            "direccion": "6a. Norte#110, Col. Centro",
            "telefono": "954 543-61-98",
            "celular": "954 544-33-85"
          }
        ],
        "salina_cruz": [
          {
            "nombre": "Funeraria y Velatorio Exequias del ISTMO",
            "direccion": "AV. Del Puerto Ángel s/n, Col. Barrio de Santa Rosa",
            "telefono": "971 714-18-78"
          }
        ],
        "santiago_yolomecat_teposcolula": [
          {
            "nombre": "Funeraria Keila",
            "direccion": "Horacio Zúñiga s/n, Col. Sección primera",
            "celular": "953 538-44-79"
          }
        ],
        "santo_domingo_tehuantepec": [
          {
            "nombre": "Funeraria González",
            "direccion": "Calzada Emancipación 1-B, Col. Guichevere",
            "telefono": "971 715-0171",
            "celular": "971 117-3354"
          }
        ],
        "san_juan_bautista_tuxtepec": [
          {
            "nombre": "Funerales Triunfo",
            "direccion": "20 de noviembre # 822, Col. Centro",
            "telefonos": ["287 875-34-31", "287 875-06-61"]
          }
        ],
        "san_pedro_tapanatepec": [
          {
            "nombre": "Funeraria González",
            "direccion": "Calzada Emancipación 1-B, Col. Guichevere",
            "telefono": "971 715-0171",
            "celular": "971 117-3354"
          }
        ],
        "tlaxiaco": [
          {
            "nombre": "Funerales Keila",
            "direccion": "Horacio Zúñiga s/n, Col. Sección primera",
            "celular": "953 538-44-79"
          }
        ],
        "huatulco": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951 518-73-35"
          }
        ],
        "pochutla": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951 518-73-35"
          }
        ],
        "puerto_escondido": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951 518-73-35"
          }
        ],
        "rio_grande": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951 518-73-35"
          }
        ],
        "santos_reyes_nopala": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951 518-73-35"
          }
        ],
        "san_gabriel_mixtepec": [
          {
            "nombre": "Agencia Funeraria Naser Oaxaca",
            "direccion": "Calz. Héroes de Chapultepec #1125, Col. Reforma",
            "telefono": "951 518-73-35"
          }
        ]
      }
    },
    "puebla": {
      "ciudades": {
        "puebla": [
          {
            "nombre": "Capillas del Recuerdo",
            "direccion": "9 Sur # 4107 entre 41 y 43 Pte., Col. Gabriel Pastor",
            "telefonos": ["222 603-85-61", "222 240-05-00", "01-800-702-46-58"]
          }
        ]
      }
    },
    "queretaro": {
      "ciudades": {
        "queretaro": [
          {
            "nombre": "Aeternum Servicios Funerarios",
            "direccion": "Av. Constituyentes # 12 Ote., Col. Centro",
            "telefonos": ["442 212-33-77", "442 183-51-40"]
          },
          {
            "nombre": "Funeraria Ortega",
            "direccion": "Hidalgo # 67 Pte., Col. Centro",
            "telefonos": ["442 212-17-00", "442 212-65-22"]
          }
        ],
        "san_juan_del_rio": [
          {
            "nombre": "Funeraria Ortega",
            "direccion": "Hidalgo # 67 Pte., Col. Centro",
            "telefonos": ["442 212-17-00", "442 212-65-22"]
          }
        ]
      }
    },
    "quintana_roo": {
      "ciudades": {
        "cancun": [
          {
            "nombre": "Agencia Jardines de Paz",
            "direccion": "Av. Andrés Quintana Roo s/n, Fracc. Residencial Alborada, S.M. 44, Mz.1, Lotes 10 y 11",
            "telefonos": ["998 880-71-57", "998 880-54-33"]
          }
        ],
        "chetumal": [
          {
            "nombre": "Campo del Recuerdo",
            "direccion": "Av. Héroes # 366, Fracc. Bugambilias",
            "telefonos": ["983 832-47-64", "983 832-50-63"]
          },
          {
            "nombre": "Funerales Gamero",
            "direccion": "Av. Insurgentes #180, Col. Caminera",
            "telefonos": ["983 833-16-45", "983-16-583-55"]
          }
        ],
        "bacalar": [
          {
            "nombre": "Campo del Recuerdo",
            "telefonos": ["983 832-47-64", "983 832-50-63"],
            "tipo_servicio": "sólo domicilio"
          }
        ]
      }
    },
    "san_luis_potosi": {
      "ciudades": {
        "san_luis_potosi": [
          {
            "nombre": "Capillas del Olmo Funeral",
            "direccion": "Av. Constitución 995, Barrio de San Sebastián",
            "codigo_postal": "78349",
            "telefonos": ["444 822 0212", "444 128 7760"]
          }
        ]
      }
    },
    "sinaloa": {
      "ciudades": {
        "culiacan": [
          {
            "nombre": "Moreh Inhumaciones",
            "direccion": "Bulevar. Emiliano Zapata # 75 Pte., Coronel Jorge Almada",
            "telefonos": ["667 712-50-30", "667 716-29-50"]
          }
        ],
        "guasave": [
          {
            "nombre": "Funeraria San Jesús",
            "direccion": "Norzagaray # 59 Bis Ote., Col. Centro",
            "telefono": "687 872-13-08"
          }
        ],
        "los_mochis": [
          {
            "nombre": "Funeraria Robles",
            "direccion": "Allende y Cárdenas # 444 Nte., Col. Centro",
            "telefonos": ["668 812-31-01", "668 812-10-88"]
          }
        ],
        "mazatlan": [
          {
            "nombre": "Funerales Aeternus",
            "direccion": "Carretera Internacional #58, Coronel Adolfo López Mateos",
            "telefonos": ["669 983-15-77", "669 983-15-88"]
          }
        ]
      }
    },
    "sonora": {
      "ciudades": {
        "cd_obregon": [
          {
            "nombre": "Funerarias San Martín",
            "direccion": "Blvd. Rodolfo Elías Calles # 320, Col. Centro",
            "telefono": "644 417 37 37"
          }
        ],
        "guaymas": [
          {
            "nombre": "Funeraria San Martín",
            "direccion": "Calle 13 esq. Av. 7, Col. Centro",
            "telefonos": ["622 222 84 00", "622 224 02 44"]
          }
        ],
        "hermosillo": [
          {
            "nombre": "Funerarias San Martín",
            "direccion": "Blvd. Luis Encinas # 1 Pte. esq. Benito Juárez, Col. Centro",
            "telefonos": ["662 212 05 00", "662 212 09 00", "662 212 07 77", "01 800 623 47 77"]
          }
        ],
        "navojoa": [
          {
            "nombre": "Hernández Inhumaciones",
            "direccion": "Otero # 520, Col. Reforma",
            "telefonos": ["642 422-20-24", "642 422-30-20"]
          }
        ]
      }
    },
    "tabasco": {
      "ciudades": {
        "cardenas": [
          {
            "nombre": "Funerales Garcés Hnos.",
            "direccion": "Juárez # 522, Col. Centro",
            "telefono": "937 372-01-37"
          }
        ],
        "villahermosa": [
          {
            "nombre": "Funerales de Tabasco",
            "direccion": "Av. Paseo Usumacinta # 706, Col. Gil Sáenz",
            "telefono": "993 188-89-70"
          }
        ]
      }
    },
    "tamaulipas": {
      "ciudades": {
        "cd_mante": [
          {
            "nombre": "Funerales Mante",
            "direccion": "Luis D. Colosio # 102 Pte., Col. Miguel Alemán",
            "telefonos": ["831 232-03-07", "831 232-24-45"]
          }
        ],
        "cd_victoria": [
          {
            "nombre": "Capillas del Recuerdo",
            "direccion": "2o. Blvd. J. López Portillo # 702, Col. Guadalupe Mainero",
            "telefonos": ["834 315-17-17", "834 312-85-97"]
          }
        ],
        "matamoros": [
          {
            "nombre": "Inhumaciones Escobedo y Zerimar",
            "direccion": "República de Cuba # 46, Col. Modelo",
            "telefonos": ["868 813-93-36", "868 812-07-37", "868 812-09-22", "868 816-57-56"]
          }
        ],
        "nuevo_laredo": [
          {
            "nombre": "Funerales La Paz",
            "direccion": "Madero # 3352, Col. Centro",
            "telefono": "867 712-02-12"
          }
        ],
        "reynosa": [
          {
            "nombre": "Inhumaciones Español",
            "direccion": "Blvd. Hidalgo # 1415, Col. Longoria",
            "telefonos": ["899 923-60-97", "899 923-60-98", "899 924-19-44"]
          },
          {
            "nombre": "Funerales Valle de la Paz",
            "direccion": "Blvd. Morelos s/n, Col. Ampliación Rodríguez",
            "telefonos": ["899 923-58-74", "899 923-58-75"]
          }
        ],
        "tampico": [
          {
            "nombre": "Inhumaciones Altamira",
            "direccion": "Altamira # 405 Pte., Col. Centro",
            "telefonos": ["833 212-27-82", "833 214-10-67", "833 219-25-04"]
          },
          {
            "nombre": "Inhumaciones Altamira",
            "direccion": "Ejército Mexicano #607, Col. Minerva",
            "telefonos": ["833 213-47-47", "833 217-07-00"]
          }
        ]
      }
    },
    "tlaxcala": {
      "ciudades": {
        "sta_ana_chiautempan": [
          {
            "nombre": "Funeraria El Carmen",
            "direccion": "Morelos Pte. # 2-A, Col. Centro",
            "telefonos": ["246 462-45-22", "246 462-57-50", "246 464-47-58", "246 466-47-93"]
          }
        ],
        "tlaxcala": [
          {
            "nombre": "Inhumaciones Montsserrat",
            "direccion": "Av. Juárez # 18, Col. Centro",
            "telefonos": ["246 462-09-71", "246 462-10-59"]
          }
        ]
      }
    },
    "veracruz": {
      "ciudades": {
        "coatzacoalcos": [
          {
            "nombre": "Funeraria Secc. 31 del S.T.P.R.M.",
            "direccion": "I. de la Llave # 208 esq. Morelos, Col. Centro",
            "telefonos": ["921 211-02-00", "921 212-01-42", "921 212-48-76", "921 212-07-08 Ext. 23258 ó 23094"],
            "celulares": ["921 125-18-30", "921 120-48-20"]
          }
        ],
        "cordoba": [
          {
            "nombre": "Funerales Vélez",
            "direccion": "Av. 5 # 610, Col. Centro",
            "telefonos": ["271 712-85-45", "271 712-85-86"]
          }
        ],
        "orizaba": [
          {
            "nombre": "Funerales Hernández",
            "direccion": "Oriente 6 # 449, Col. Centro",
            "telefonos": ["272-724-27-57", "272-724-58-86"],
            "nextel": ["62*239595*2", "62*239595*3"]
          },
          {
            "nombre": "Funerales La Paz",
            "direccion": "Oriente 6 # 600, Col. Centro",
            "telefonos": ["272 725-40-76", "272 726-47-96", "272 724-10-45"]
          }
        ],
        "poza_rica": [
          {
            "nombre": "Funeraria Poza Rica",
            "direccion": "Av. 16 de septiembre # 305 esq. E. Zapata, Col. Tajín",
            "telefonos": ["782 822-03-27", "782 823-99-44"]
          }
        ],
        "tuxpan": [
          {
            "nombre": "Funerales Ángeles",
            "direccion": "López Mateos # 134 esq. Gral. Nicolás Bravo, Col. Centro",
            "telefonos": ["783 835-46-46", "783 835-50-50"],
            "celulares": ["044 783 118-66-37", "783 112-35-66"]
          }
        ],
        "veracruz": [
          {
            "nombre": "Del Ángel Funeral Home",
            "direccion": "Av. 20 de noviembre # 2199, Col. Zaragoza",
            "telefonos": ["229 937-83-75", "229 200-70-70"]
          },
          {
            "nombre": "Huerta's Funeral Home",
            "direccion": "Netzahualcóyotl # 2065, Col. Centro",
            "telefonos": ["229 934-10-53", "229 939-57-14"]
          }
        ],
        "xalapa": [
          {
            "nombre": "Funerales de Jesús",
            "direccion": "Justino Sarmiento # 27, Col. Laderas de Macuiltépetl",
            "telefonos": ["228 814-37-51", "228 814-03-68"]
          }
        ]
      }
    },
    "yucatan": {
      "ciudades": {
        "merida": [
          {
            "nombre": "Perchas Funerarias",
            "direccion": "Calle 59 # 600 por 74 y 76, Col. Centro",
            "telefonos": ["999 923-06-63", "999 923-09-22"]
          }
        ]
      }
    },
    "zacatecas": {
      "ciudades": {
        "fresnillo": [
          {
            "nombre": "Salas de Velación ISSSTEZAC",
            "direccion": "Carretera Valparaíso Km 2.5, Col. Ejidal",
            "telefono": "493 878-11-61"
          }
        ],
        "guadalupe": [
          {
            "nombre": "Salas de Velación ISSSTEZAC",
            "direccion": "Av. La Condesa # 50, Col. Valle del Conde",
            "telefono": "492 998-42-10",
            "celular": "492 492-17-29"
          }
        ],
        "jerez": [
          {
            "nombre": "Salas de Velación ISSSTEZAC",
            "direccion": "Del Reloj # 19, Col. Centro",
            "telefonos": ["494 945-63-61", "494 945-63-65"]
          }
        ],
        "luis_moya": [
          {
            "nombre": "Recinto Funerario Los Encinos",
            "telefono": "449-913-32-32",
            "tipo_servicio": "servicio a domicilio"
          }
        ],
        "zacatecas": [
          {
            "nombre": "Salas de Velación ISSSTEZAC",
            "direccion": "Prol. García Salinas # 306-A, Col. Sierra de Álica",
            "telefonos": ["492 924-21-31", "492 924-21-32"]
          }
        ]
      }
    }
  }
};

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

const stateNameMap: Record<string, string> = {
    "aguascalientes": "Aguascalientes",
    "baja_california_norte": "Baja California",
    "baja_california_sur": "Baja California Sur",
    "campeche": "Campeche",
    "cdmx": "CDMX",
    "chiapas": "Chiapas",
    "chihuahua": "Chihuahua",
    "coahuila": "Coahuila",
    "colima": "Colima",
    "durango": "Durango",
    "estado_de_mexico": "México",
    "guanajuato": "Guanajuato",
    "guerrero": "Guerrero",
    "hidalgo": "Hidalgo",
    "jalisco": "Jalisco",
    "michoacan": "Michoacán",
    "morelos": "Morelos",
    "nayarit": "Nayarit",
    "nuevo_leon": "Nuevo León",
    "oaxaca": "Oaxaca",
    "puebla": "Puebla",
    "queretaro": "Querétaro",
    "quintana_roo": "Quintana Roo",
    "san_luis_potosi": "San Luis Potosí",
    "sinaloa": "Sinaloa",
    "sonora": "Sonora",
    "tabasco": "Tabasco",
    "tamaulipas": "Tamaulipas",
    "tlaxcala": "Tlaxcala",
    "veracruz": "Veracruz",
    "yucatan": "Yucatán",
    "zacatecas": "Zacatecas"
};

const allServicesSet = new Set<Service>();
const processedBranches: Branch[] = [];

// Process "agencias_propias"
rawData.agencias_propias.forEach(agencia => {
    const cityState = agencia.ciudad.split(',').map(s => s.trim());
    const city = cityState[0];
    const state = cityState.length > 1 ? cityState[1] : 'CDMX';
    const phone = Array.isArray(agencia.telefonos) ? agencia.telefonos[0] : agencia.telefono || 'No disponible';
    
    (agencia.servicios || []).forEach(service => allServicesSet.add(service));

    processedBranches.push({
        id: slugify(`${agencia.nombre} ${city}`),
        name: agencia.nombre,
        address: agencia.direccion,
        city: city,
        state: state,
        coordinates: { lat: 23.6345, lng: -102.5528 }, // Placeholder coordinates
        phone: phone,
        schedule: 'Consultar horarios',
        services: agencia.servicios || [],
        status: 'activa',
        imageUrl: 'https://placehold.co/600x400.png',
        manager: 'N/A'
    });
});

// Process "cobertura_estados"
for (const stateKey in rawData.cobertura_estados) {
    const stateData = (rawData.cobertura_estados as any)[stateKey];
    const stateName = stateNameMap[stateKey];

    if (stateData.ciudades) {
        for (const cityKey in stateData.ciudades) {
            const cityAgencies = stateData.ciudades[cityKey];
            if (Array.isArray(cityAgencies)) {
                cityAgencies.forEach((agencia: any) => {
                    const phone = Array.isArray(agencia.telefonos) ? agencia.telefonos[0] : agencia.telefono || 'No disponible';
                    processedBranches.push({
                        id: slugify(`${agencia.nombre} ${cityKey}`),
                        name: agencia.nombre,
                        address: agencia.direccion || 'No disponible',
                        city: cityKey.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                        state: stateName,
                        coordinates: { lat: 23.6345, lng: -102.5528 }, // Placeholder coordinates
                        phone: phone,
                        schedule: 'Consultar horarios',
                        services: agencia.tipo_servicio ? [agencia.tipo_servicio] : [],
                        status: 'activa',
                        imageUrl: 'https://placehold.co/600x400.png',
                        manager: 'Afiliado'
                    });
                });
            }
        }
    }
}


export const branches: Branch[] = processedBranches;

export const allServices: Service[] = Array.from(allServicesSet).sort();

export const allStatuses: BranchStatus[] = ["activa", "inactiva", "proxima", "urgencias"];

    