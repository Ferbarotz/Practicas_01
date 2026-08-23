import React from 'react'

const F1_DATA = [
  {
    year: 1950, champion: 'Nino Farina', team: 'Alfa Romeo', nationality: '🇮🇹',
    points: 30, wins: 3, podiums: 5, poles: 2,
    teamStrengths: ['Dominio técnico absoluto', 'Motor supercompresor 1.5L', 'Experiencia de preguerra'],
    highlights: 'Primer campeón mundial de F1. Dominó la temporada inaugural con un estilo agresivo y técnica brillante.',
    teamColor: '#B22222',
  },
  {
    year: 1951, champion: 'Juan Manuel Fangio', team: 'Alfa Romeo', nationality: '🇦🇷',
    points: 31, wins: 3, podiums: 5, poles: 4,
    teamStrengths: ['Motor con supercompresor', 'Fiabilidad mecánica', 'Equipo de pilotos de élite'],
    highlights: 'Fangio inicia su legado. Primera de cinco coronas. Velocidad y consistencia extraordinarias.',
    teamColor: '#B22222',
  },
  {
    year: 1952, champion: 'Alberto Ascari', team: 'Ferrari', nationality: '🇮🇹',
    points: 36, wins: 6, podiums: 6, poles: 5,
    teamStrengths: ['Ferrari 500 F2 invencible', 'Aerodinámica pionera', 'Preparación mecánica superior'],
    highlights: 'Ascari ganó 6 de 7 carreras. Dominio casi total de la temporada corrida bajo reglamento F2.',
    teamColor: '#DC143C',
  },
  {
    year: 1953, champion: 'Alberto Ascari', team: 'Ferrari', nationality: '🇮🇹',
    points: 34.5, wins: 5, podiums: 7, poles: 6,
    teamStrengths: ['Continuidad del Ferrari 500', 'Estrategia de carrera perfecta', 'Fiabilidad inigualable'],
    highlights: 'Bicampeón consecutivo. Ascari fue el piloto más consistente de la era.',
    teamColor: '#DC143C',
  },
  {
    year: 1954, champion: 'Juan Manuel Fangio', team: 'Maserati / Mercedes', nationality: '🇦🇷',
    points: 42, wins: 6, podiums: 8, poles: 5,
    teamStrengths: ['Mercedes W196 tecnología alemana', 'Ingeniería de vanguardia', 'Presupuesto ilimitado'],
    highlights: 'Fangio ganó con dos equipos distintos en la misma temporada. Versatilidad única.',
    teamColor: '#C0C0C0',
  },
  {
    year: 1955, champion: 'Juan Manuel Fangio', team: 'Mercedes', nationality: '🇦🇷',
    points: 40, wins: 4, podiums: 5, poles: 3,
    teamStrengths: ['Mercedes W196 evolucionado', 'Gestión de neumáticos avanzada', 'Pit stops cronometrados'],
    highlights: 'Mercedes se retiró del campeonato tras Le Mans. Fangio ya era campeón antes del final.',
    teamColor: '#C0C0C0',
  },
  {
    year: 1956, champion: 'Juan Manuel Fangio', team: 'Ferrari', nationality: '🇦🇷',
    points: 30, wins: 3, podiums: 5, poles: 5,
    teamStrengths: ['Ferrari D50-Lancia híbrido', 'Potencia en rectas', 'Soporte mecánico completo'],
    highlights: 'Cuarto título. Fangio utilizó el coche de Peter Collins para ganar el campeonato.',
    teamColor: '#DC143C',
  },
  {
    year: 1957, champion: 'Juan Manuel Fangio', team: 'Maserati', nationality: '🇦🇷',
    points: 40, wins: 4, podiums: 6, poles: 4,
    teamStrengths: ['Maserati 250F legendario', 'Balance perfecto chasis-motor', 'Piloto en mejor forma'],
    highlights: 'Quinto y último título. La remontada en Nürburgring es considerada la mejor carrera de la historia.',
    teamColor: '#4169E1',
  },
  {
    year: 1958, champion: 'Mike Hawthorn', team: 'Ferrari', nationality: '🇬🇧',
    points: 42, wins: 1, podiums: 6, poles: 4,
    teamStrengths: ['Ferrari Dino 246 potente', 'Consistencia en puntos', 'Estrategia conservadora'],
    highlights: 'Primer campeón británico. Ganó el título con solo 1 victoria pero suma de podios constante.',
    teamColor: '#DC143C',
  },
  {
    year: 1959, champion: 'Jack Brabham', team: 'Cooper', nationality: '🇦🇺',
    points: 31, wins: 2, podiums: 5, poles: 1,
    teamStrengths: ['Motor trasero revolucionario', 'Peso reducido', 'Maniobrabilidad superior'],
    highlights: 'Cooper cambia la F1 para siempre con el motor trasero. Brabham empujó el coche hasta la meta en la última carrera.',
    teamColor: '#228B22',
  },
  {
    year: 1960, champion: 'Jack Brabham', team: 'Cooper', nationality: '🇦🇺',
    points: 43, wins: 5, podiums: 7, poles: 3,
    teamStrengths: ['Dominio del concepto motor trasero', 'Ligereza estructural', 'Fiabilidad mecánica'],
    highlights: 'Bicampeón con Cooper. Dominó la era del motor trasero que él mismo ayudó a popularizar.',
    teamColor: '#228B22',
  },
  {
    year: 1961, champion: 'Phil Hill', team: 'Ferrari', nationality: '🇺🇸',
    points: 34, wins: 2, podiums: 6, poles: 5,
    teamStrengths: ['Ferrari 156 "Sharknose"', 'Motor V6 potente', 'Aerodinámica con nariz tiburón'],
    highlights: 'Primer (y único) campeón americano en la era clásica. La temporada estuvo marcada por la muerte de su compañero Von Trips.',
    teamColor: '#DC143C',
  },
  {
    year: 1962, champion: 'Graham Hill', team: 'BRM', nationality: '🇬🇧',
    points: 42, wins: 4, podiums: 6, poles: 1,
    teamStrengths: ['BRM V8 fiable', 'Estrategia de carrera sólida', 'Equipo unido y motivado'],
    highlights: 'El único título de BRM. Hill fue consistente durante toda la temporada.',
    teamColor: '#006400',
  },
  {
    year: 1963, champion: 'Jim Clark', team: 'Lotus', nationality: '🇬🇧',
    points: 54, wins: 7, podiums: 8, poles: 7,
    teamStrengths: ['Lotus 25 monococque pionero', 'Bajo peso radical', 'Motor Climax V8 potente'],
    highlights: 'Clark dominó la temporada con 7 victorias de 10 carreras. Considerado uno de los más grandes.',
    teamColor: '#006400',
  },
  {
    year: 1964, champion: 'John Surtees', team: 'Ferrari', nationality: '🇬🇧',
    points: 40, wins: 2, podiums: 5, poles: 2,
    teamStrengths: ['Ferrari 158 V8 competitivo', 'Soporte técnico amplio', 'Experiencia en motos como base'],
    highlights: 'Único piloto en ganar campeonatos mundiales en motos y F1. Título decidido en la última carrera.',
    teamColor: '#DC143C',
  },
  {
    year: 1965, champion: 'Jim Clark', team: 'Lotus', nationality: '🇬🇧',
    points: 54, wins: 6, podiums: 8, poles: 6,
    teamStrengths: ['Lotus 33 refinado', 'Motor Climax evolucionado', 'Trabajo aerodinámico avanzado'],
    highlights: 'Segundo título de Clark. También ganó las 500 Millas de Indianápolis ese mismo año.',
    teamColor: '#006400',
  },
  {
    year: 1966, champion: 'Jack Brabham', team: 'Brabham', nationality: '🇦🇺',
    points: 42, wins: 4, podiums: 5, poles: 3,
    teamStrengths: ['Primer constructor-campeón', 'Motor Repco V8 confiable', 'Auto construido por el propio piloto'],
    highlights: 'Primer y único piloto-constructor en ganar el campeonato. Hazaña irrepetible en la F1 moderna.',
    teamColor: '#FFD700',
  },
  {
    year: 1967, champion: 'Denny Hulme', team: 'Brabham', nationality: '🇳🇿',
    points: 51, wins: 2, podiums: 6, poles: 0,
    teamStrengths: ['Brabham BT24 competitivo', 'Consistencia sobre la velocidad punta', 'Solidez en circuitos variados'],
    highlights: 'Hulme sorprendió a su jefe Brabham ganando el título. Ninguna pole, puro pragmatismo.',
    teamColor: '#FFD700',
  },
  {
    year: 1968, champion: 'Graham Hill', team: 'Lotus', nationality: '🇬🇧',
    points: 48, wins: 3, podiums: 7, poles: 2,
    teamStrengths: ['Lotus 49B aerodinámico', 'Primer uso de aleron', 'Equipo resiliente tras muerte de Clark'],
    highlights: 'Segundo título de Hill, ganado tras la trágica muerte de Jim Clark. Llamado "Sr. Mónaco" por sus 5 victorias allí.',
    teamColor: '#006400',
  },
  {
    year: 1969, champion: 'Jackie Stewart', team: 'Matra', nationality: '🇬🇧',
    points: 63, wins: 6, podiums: 8, poles: 2,
    teamStrengths: ['Matra MS80 balance perfecto', 'Ford Cosworth DFV dominante', 'Estrategia técnica de Tyrrell'],
    highlights: 'Stewart revolutionó la seguridad en F1. Dominó con 6 victorias en una época peligrosa.',
    teamColor: '#4169E1',
  },
  {
    year: 1970, champion: 'Jochen Rindt', team: 'Lotus', nationality: '🇦🇹',
    points: 45, wins: 5, podiums: 7, poles: 10,
    teamStrengths: ['Lotus 72 revolucionario', 'Downforce pionera', 'Motor Cosworth perfeccionado'],
    highlights: 'Único campeón póstumo de la F1. Murió en Monza con el título ya prácticamente asegurado.',
    teamColor: '#006400',
  },
  {
    year: 1971, champion: 'Jackie Stewart', team: 'Tyrrell', nationality: '🇬🇧',
    points: 62, wins: 6, podiums: 8, poles: 6,
    teamStrengths: ['Tyrrell 003 eficiente', 'Ken Tyrrell estratega brillante', 'Ford DFV en su mejor momento'],
    highlights: 'Segundo título de Stewart con Tyrrell. Dominó con claridad táctica y velocidad consistente.',
    teamColor: '#1E90FF',
  },
  {
    year: 1972, champion: 'Emerson Fittipaldi', team: 'Lotus', nationality: '🇧🇷',
    points: 61, wins: 5, podiums: 8, poles: 3,
    teamStrengths: ['Lotus 72D optimizado', 'Primer gran piloto brasileño', 'Regularidad excepcional'],
    highlights: 'El campeón más joven hasta ese momento (25 años). Primer brasileño en ganar el mundial.',
    teamColor: '#006400',
  },
  {
    year: 1973, champion: 'Jackie Stewart', team: 'Tyrrell', nationality: '🇬🇧',
    points: 71, wins: 5, podiums: 10, poles: 3,
    teamStrengths: ['Tyrrell 006 competitivo', 'Consistencia durante toda la temporada', 'Planificación estratégica Tyrrell'],
    highlights: 'Tercer y último título de Stewart. Se retiró a fin de temporada tras la muerte de su compañero Cevert.',
    teamColor: '#1E90FF',
  },
  {
    year: 1974, champion: 'Emerson Fittipaldi', team: 'McLaren', nationality: '🇧🇷',
    points: 55, wins: 3, podiums: 7, poles: 2,
    teamStrengths: ['McLaren M23 competitivo', 'Organización empresarial', 'Fiabilidad mecánica sobresaliente'],
    highlights: 'Segundo título de Fittipaldi ahora con McLaren. Temporada disputada hasta la última carrera.',
    teamColor: '#FF8C00',
  },
  {
    year: 1975, champion: 'Niki Lauda', team: 'Ferrari', nationality: '🇦🇹',
    points: 64.5, wins: 5, podiums: 9, poles: 9,
    teamStrengths: ['Ferrari 312T dominante', 'Motor flat-12 potente', 'Luca di Montezemolo reorganizó Ferrari'],
    highlights: 'Lauda y Ferrari dominaron con una eficiencia germánica. 9 poles en una temporada.',
    teamColor: '#DC143C',
  },
  {
    year: 1976, champion: 'James Hunt', team: 'McLaren', nationality: '🇬🇧',
    points: 69, wins: 6, podiums: 8, poles: 8,
    teamStrengths: ['McLaren M23 evolucionado', 'Velocidad en clasificación', 'Carisma y agresividad'],
    highlights: 'La temporada más dramática. Lauda sobrevivió al accidente en Nürburgring; Hunt ganó en Japón bajo la lluvia.',
    teamColor: '#FF8C00',
  },
  {
    year: 1977, champion: 'Niki Lauda', team: 'Ferrari', nationality: '🇦🇹',
    points: 72, wins: 3, podiums: 8, poles: 2,
    teamStrengths: ['Ferrari 312T2 confiable', 'Análisis técnico racional', 'Regreso heroico tras accidente'],
    highlights: 'Lauda ganó el título y abandonó Ferrari a dos carreras del final. Carácter único.',
    teamColor: '#DC143C',
  },
  {
    year: 1978, champion: 'Mario Andretti', team: 'Lotus', nationality: '🇺🇸',
    points: 64, wins: 6, podiums: 8, poles: 8,
    teamStrengths: ['Lotus 79 efecto suelo revolucionario', 'Colin Chapman innovación pura', 'Downforce sin precedentes'],
    highlights: 'El Lotus 79 cambió la F1 con el efecto suelo. Andretti y Peterson dominaron hasta la fatal muerte de Peterson.',
    teamColor: '#006400',
  },
  {
    year: 1979, champion: 'Jody Scheckter', team: 'Ferrari', nationality: '🇿🇦',
    points: 51, wins: 3, podiums: 7, poles: 1,
    teamStrengths: ['Ferrari 312T4 balanceado', 'Fiabilidad récord', 'Solidez sobre ritmo explosivo'],
    highlights: 'Último título de Ferrari hasta 1982. Scheckter ganó por consistencia mientras otros rivales fallaban.',
    teamColor: '#DC143C',
  },
  {
    year: 1980, champion: 'Alan Jones', team: 'Williams', nationality: '🇦🇺',
    points: 67, wins: 5, podiums: 8, poles: 3,
    teamStrengths: ['Williams FW07 efecto suelo', 'Patrick Head ingeniero brillante', 'Equipo en pleno ascenso'],
    highlights: 'Williams comienza su era dorada. Jones fue un piloto combativo y sin adornos.',
    teamColor: '#00BFFF',
  },
  {
    year: 1981, champion: 'Nelson Piquet', team: 'Brabham', nationality: '🇧🇷',
    points: 50, wins: 3, podiums: 5, poles: 4,
    teamStrengths: ['Brabham BT49C ágil', 'Gordon Murray diseño innovador', 'Estrategia de parada en pits pionera'],
    highlights: 'Primer título de Piquet. Brabham usó el undercut de pit stops ante de que fuera tendencia.',
    teamColor: '#FFD700',
  },
  {
    year: 1982, champion: 'Keke Rosberg', team: 'Williams', nationality: '🇫🇮',
    points: 44, wins: 1, podiums: 5, poles: 1,
    teamStrengths: ['Williams FW08 equilibrado', 'Consistencia en temporada caótica', 'Fiabilidad cuando otros fallaban'],
    highlights: 'El campeón con menos victorias (1). Temporada marcada por accidentes y muertes de Villeneuve y Paletti.',
    teamColor: '#00BFFF',
  },
  {
    year: 1983, champion: 'Nelson Piquet', team: 'Brabham', nationality: '🇧🇷',
    points: 59, wins: 3, podiums: 7, poles: 1,
    teamStrengths: ['Brabham BT52 turbo', 'BMW turbo explosivo', 'Estrategia técnica avanzada'],
    highlights: 'El turbo venció al aspirado. Piquet ganó el título en la última carrera ante Prost.',
    teamColor: '#FFD700',
  },
  {
    year: 1984, champion: 'Niki Lauda', team: 'McLaren', nationality: '🇦🇹',
    points: 72, wins: 5, podiums: 11, poles: 2,
    teamStrengths: ['McLaren MP4/2 dominante', 'TAG-Porsche turbo confiable', 'Lauda y Prost duelo interno'],
    highlights: 'McLaren ganó 12 de 16 carreras. Lauda venció a Prost por solo 0.5 puntos, el margen más pequeño.',
    teamColor: '#FF8C00',
  },
  {
    year: 1985, champion: 'Alain Prost', team: 'McLaren', nationality: '🇫🇷',
    points: 73, wins: 5, podiums: 11, poles: 2,
    teamStrengths: ['McLaren MP4/2B actualizado', 'Prost analítico y eficiente', 'TAG-Porsche en su pico'],
    highlights: 'Primer título de Prost, "El Profesor". Velocidad inteligente y gestión perfecta de recursos.',
    teamColor: '#FF8C00',
  },
  {
    year: 1986, champion: 'Alain Prost', team: 'McLaren', nationality: '🇫🇷',
    points: 72, wins: 4, podiums: 10, poles: 1,
    teamStrengths: ['McLaren TAG Porsche fiable', 'Gestión de neumáticos superior', 'Inteligencia táctica'],
    highlights: 'Piquet y Mansell explotaron neumáticos en la última carrera en Australia. Prost ganó sin parar.',
    teamColor: '#FF8C00',
  },
  {
    year: 1987, champion: 'Nelson Piquet', team: 'Williams', nationality: '🇧🇷',
    points: 73, wins: 3, podiums: 8, poles: 4,
    teamStrengths: ['Williams FW11B Honda turbo', 'Potencia Honda insuperable', 'Ingeniería Patrick Head'],
    highlights: 'Tercer título de Piquet con Williams-Honda. Ganó el título pese al accidente de Mansell en Japón.',
    teamColor: '#00BFFF',
  },
  {
    year: 1988, champion: 'Ayrton Senna', team: 'McLaren', nationality: '🇧🇷',
    points: 90, wins: 8, podiums: 11, poles: 13,
    teamStrengths: ['McLaren MP4/4 imbatible', 'Honda RA168E 685cv', 'Senna y Prost mejor dupla de la historia'],
    highlights: 'McLaren ganó 15 de 16 carreras. Senna ganó 8 con 13 poles. La temporada más dominante hasta ese momento.',
    teamColor: '#FF8C00',
  },
  {
    year: 1989, champion: 'Alain Prost', team: 'McLaren', nationality: '🇫🇷',
    points: 76, wins: 4, podiums: 7, poles: 2,
    teamStrengths: ['McLaren MP4/5 competitivo', 'Honda V10 potente', 'Política interna a favor de Prost'],
    highlights: 'La guerra Senna-Prost. Colisión en Suzuka. Senna descalificado. Prost campeón.',
    teamColor: '#FF8C00',
  },
  {
    year: 1990, champion: 'Ayrton Senna', team: 'McLaren', nationality: '🇧🇷',
    points: 78, wins: 6, podiums: 10, poles: 10,
    teamStrengths: ['McLaren MP4/5B evolucionado', 'Honda V10 dominante', 'Senna en estado puro'],
    highlights: 'Senna se vengó de 1989 empujando a Prost en Suzuka. Campeón con mano de hierro.',
    teamColor: '#FF8C00',
  },
  {
    year: 1991, champion: 'Ayrton Senna', team: 'McLaren', nationality: '🇧🇷',
    points: 96, wins: 7, podiums: 11, poles: 8,
    teamStrengths: ['McLaren MP4/6 Honda V12', 'Honda V12 potencia máxima', 'Senna en el pico de su carrera'],
    highlights: 'Tercer y último título de Senna. Williams comenzó a mostrar su potencial con Mansell.',
    teamColor: '#FF8C00',
  },
  {
    year: 1992, champion: 'Nigel Mansell', team: 'Williams', nationality: '🇬🇧',
    points: 108, wins: 9, podiums: 12, poles: 14,
    teamStrengths: ['Williams FW14B activo electrónico', 'Suspensión activa revolucionaria', 'Control de tracción y ABS'],
    highlights: 'Mansell ganó los primeros 5 grandes premios. 14 poles. El FW14B fue el coche más avanzado de su era.',
    teamColor: '#00BFFF',
  },
  {
    year: 1993, champion: 'Alain Prost', team: 'Williams', nationality: '🇫🇷',
    points: 99, wins: 7, podiums: 12, poles: 13,
    teamStrengths: ['Williams FW15C electrónico', 'Renault V10 potencia y fiabilidad', 'Ayudas electrónicas al límite'],
    highlights: 'Prost ganó su cuarto y último título. Williams dominó con tecnología electrónica, luego prohibida.',
    teamColor: '#00BFFF',
  },
  {
    year: 1994, champion: 'Michael Schumacher', team: 'Benetton', nationality: '🇩🇪',
    points: 92, wins: 8, podiums: 10, poles: 6,
    teamStrengths: ['Benetton B194 potente', 'Ford Zetec-R confiable', 'Schumacher talento generacional'],
    highlights: 'El año más trágico: muerte de Senna en Imola. Schumacher ganó con controversia en Adelaida.',
    teamColor: '#00AA00',
  },
  {
    year: 1995, champion: 'Michael Schumacher', team: 'Benetton', nationality: '🇩🇪',
    points: 102, wins: 9, podiums: 12, poles: 8,
    teamStrengths: ['Benetton B195 Renault', 'Renault V10 máxima potencia', 'Schumacher-Brawn dupla perfecta'],
    highlights: 'Schumacher y Renault demoledores. Su último año en Benetton antes de unirse a Ferrari.',
    teamColor: '#00AA00',
  },
  {
    year: 1996, champion: 'Damon Hill', team: 'Williams', nationality: '🇬🇧',
    points: 97, wins: 8, podiums: 11, poles: 9,
    teamStrengths: ['Williams FW18 dominante', 'Renault V10 insuperable', 'Confiabilidad mecánica perfecta'],
    highlights: 'Hill cumplió su destino: hijo de campeón convertido en campeón. Dominó el año.',
    teamColor: '#00BFFF',
  },
  {
    year: 1997, champion: 'Jacques Villeneuve', team: 'Williams', nationality: '🇨🇦',
    points: 81, wins: 7, podiums: 10, poles: 8,
    teamStrengths: ['Williams FW19 competitivo', 'Renault en último año', 'Estrategia agresiva'],
    highlights: 'Villeneuve ganó pese al intento de Schumacher de sacarlo en la última curva de Jerez.',
    teamColor: '#00BFFF',
  },
  {
    year: 1998, champion: 'Mika Häkkinen', team: 'McLaren', nationality: '🇫🇮',
    points: 100, wins: 8, podiums: 12, poles: 9,
    teamStrengths: ['McLaren MP4/13 dominante', 'Mercedes V10 fiable y potente', 'Diseño Adrian Newey'],
    highlights: 'McLaren con Adrian Newey volvió a dominar. Häkkinen cumplió su sueño del título.',
    teamColor: '#C0C0C0',
  },
  {
    year: 1999, champion: 'Mika Häkkinen', team: 'McLaren', nationality: '🇫🇮',
    points: 76, wins: 5, podiums: 10, poles: 11,
    teamStrengths: ['McLaren MP4/14 potente', 'Mercedes fiabilidad mejorada', 'Pilotos de talla mundial'],
    highlights: 'Bicampeón. Schumacher roto la pierna en Silverstone. Häkkinen aprovechó y cerró el título.',
    teamColor: '#C0C0C0',
  },
  {
    year: 2000, champion: 'Michael Schumacher', team: 'Ferrari', nationality: '🇩🇪',
    points: 108, wins: 9, podiums: 14, poles: 9,
    teamStrengths: ['Ferrari F1-2000 completo', 'Ross Brawn estrategia magistral', 'Bridgestone neumáticos a medida'],
    highlights: 'Schumacher rompe la sequía de 21 años de Ferrari. Dominio técnico y estratégico total.',
    teamColor: '#DC143C',
  },
  {
    year: 2001, champion: 'Michael Schumacher', team: 'Ferrari', nationality: '🇩🇪',
    points: 123, wins: 9, podiums: 14, poles: 11,
    teamStrengths: ['Ferrari F2001 superior', 'Ross Brawn táctico sin igual', 'Bridgestone optimizados'],
    highlights: 'Schumacher aplastó la competencia. 4 carreras antes del final ya era campeón.',
    teamColor: '#DC143C',
  },
  {
    year: 2002, champion: 'Michael Schumacher', team: 'Ferrari', nationality: '🇩🇪',
    points: 144, wins: 11, podiums: 17, poles: 7,
    teamStrengths: ['Ferrari F2002 el mejor de la era', 'Barrichello perfecto escudero', 'Dominio técnico absoluto'],
    highlights: 'El dominio más completo de la historia moderna. Schumacher ganó 11 de 17 carreras.',
    teamColor: '#DC143C',
  },
  {
    year: 2003, champion: 'Michael Schumacher', team: 'Ferrari', nationality: '🇩🇪',
    points: 93, wins: 6, podiums: 12, poles: 5,
    teamStrengths: ['Ferrari F2003-GA confiable', 'Adaptación al nuevo sistema de puntos', 'Gestión de campeonato experta'],
    highlights: 'Temporada mucho más disputada. Räikkönen casi lo ganó. Schumacher sexto título en última carrera.',
    teamColor: '#DC143C',
  },
  {
    year: 2004, champion: 'Michael Schumacher', team: 'Ferrari', nationality: '🇩🇪',
    points: 148, wins: 13, podiums: 17, poles: 8,
    teamStrengths: ['Ferrari F2004 dominio total', 'Motor V10 en su pico absoluto', 'Equipo perfecto en boxes'],
    highlights: 'Récord histórico: 13 victorias en una temporada. El F2004 fue el mejor coche de la era V10.',
    teamColor: '#DC143C',
  },
  {
    year: 2005, champion: 'Fernando Alonso', team: 'Renault', nationality: '🇪🇸',
    points: 133, wins: 7, podiums: 15, poles: 7,
    teamStrengths: ['Renault R25 ágil y consistente', 'Michelin neumáticos ventaja', 'Flavio Briatore estratega'],
    highlights: 'Alonso rompe la hegemonía de Schumacher. El campeón más joven de la historia (24 años en ese momento).',
    teamColor: '#FFD700',
  },
  {
    year: 2006, champion: 'Fernando Alonso', team: 'Renault', nationality: '🇪🇸',
    points: 134, wins: 7, podiums: 13, poles: 6,
    teamStrengths: ['Renault R26 V8 competitivo', 'Gestión neumáticos Michelin final', 'Alonso en el pico'],
    highlights: 'Bicampeón. Venció a Schumacher en su último intento. Schumacher anunció retiro al final de la temporada.',
    teamColor: '#FFD700',
  },
  {
    year: 2007, champion: 'Kimi Räikkönen', team: 'Ferrari', nationality: '🇫🇮',
    points: 110, wins: 6, podiums: 12, poles: 3,
    teamStrengths: ['Ferrari F2007 perfecto', 'Bridgestone bien preparados', 'Alonso y Hamilton se destruyeron mutuamente'],
    highlights: 'Räikkönen ganó el título en la última carrera por 1 punto. McLaren perdió el título por espionaje.',
    teamColor: '#DC143C',
  },
  {
    year: 2008, champion: 'Lewis Hamilton', team: 'McLaren', nationality: '🇬🇧',
    points: 98, wins: 5, podiums: 12, poles: 7,
    teamStrengths: ['McLaren MP4-23 competitivo', 'Mercedes V8 fiable', 'Hamilton velocidad bruta excepcional'],
    highlights: 'Hamilton adelantó a Glock en la última vuelta del último GP para ganar el título por 1 punto.',
    teamColor: '#C0C0C0',
  },
  {
    year: 2009, champion: 'Jenson Button', team: 'Brawn GP', nationality: '🇬🇧',
    points: 95, wins: 6, podiums: 10, poles: 6,
    teamStrengths: ['Brawn BGP001 difusor doble revolución', 'Ross Brawn genio técnico', 'Presupuesto mínimo victoria máxima'],
    highlights: 'La historia más romántica: Brawn GP, equipo creado de las cenizas de Honda, dominó la primera mitad y ganó ambos títulos.',
    teamColor: '#FFFFFF',
  },
  {
    year: 2010, champion: 'Sebastian Vettel', team: 'Red Bull', nationality: '🇩🇪',
    points: 256, wins: 5, podiums: 12, poles: 10,
    teamStrengths: ['Red Bull RB6 downforce', 'Adrian Newey maestro aerodinámico', 'Renault KERS y motores'],
    highlights: 'Vettel ganó el título en la última carrera. Hamilton, Alonso y Webber también podían ganar.',
    teamColor: '#1E3A5F',
  },
  {
    year: 2011, champion: 'Sebastian Vettel', team: 'Red Bull', nationality: '🇩🇪',
    points: 392, wins: 11, podiums: 17, poles: 15,
    teamStrengths: ['Red Bull RB7 imbatible', 'KERS y DRS aprovechados al máximo', 'Newey en estado puro'],
    highlights: 'Dominio aplastante. 11 victorias, 15 poles. Solo comparable a Schumacher 2002 y 2004.',
    teamColor: '#1E3A5F',
  },
  {
    year: 2012, champion: 'Sebastian Vettel', team: 'Red Bull', nationality: '🇩🇪',
    points: 281, wins: 5, podiums: 13, poles: 7,
    teamStrengths: ['Red Bull RB8 versátil', 'Fiabilidad en circuitos variados', 'Gestión de neumáticos Pirelli'],
    highlights: 'Temporada abierta con 7 ganadores diferentes. Vettel remontó 53 puntos en las últimas 5 carreras.',
    teamColor: '#1E3A5F',
  },
  {
    year: 2013, champion: 'Sebastian Vettel', team: 'Red Bull', nationality: '🇩🇪',
    points: 397, wins: 13, podiums: 17, poles: 11,
    teamStrengths: ['Red Bull RB9 perfecto', 'Pirelli neumáticos dominados', '9 victorias consecutivas récord'],
    highlights: 'Vettel igualó a Schumacher con 9 victorias seguidas. Cuarto título consecutivo.',
    teamColor: '#1E3A5F',
  },
  {
    year: 2014, champion: 'Lewis Hamilton', team: 'Mercedes', nationality: '🇬🇧',
    points: 384, wins: 11, podiums: 16, poles: 7,
    teamStrengths: ['Mercedes W05 era híbrida dominante', 'Motor híbrido años luz adelante', 'Aldo Costa diseño superior'],
    highlights: 'Comienza la era Mercedes. El W05 fue revolucionario. Hamilton 11 victorias vs Rosberg.',
    teamColor: '#00D2BE',
  },
  {
    year: 2015, champion: 'Lewis Hamilton', team: 'Mercedes', nationality: '🇬🇧',
    points: 381, wins: 10, podiums: 17, poles: 11,
    teamStrengths: ['Mercedes W06 supremacía total', 'Motor PU106B imbatible', 'Estrategia perfecta de boxes'],
    highlights: 'Hamilton ganó su tercer título. Mercedes dominó con margen cómodo sobre Ferrari.',
    teamColor: '#00D2BE',
  },
  {
    year: 2016, champion: 'Nico Rosberg', team: 'Mercedes', nationality: '🇩🇪',
    points: 385, wins: 9, podiums: 17, poles: 8,
    teamStrengths: ['Mercedes W07 el mejor de su era', 'Fiabilidad récord', 'Ventaja motriz insuperable'],
    highlights: 'Rosberg ganó el título y se retiró 5 días después. Venció a Hamilton pese a estar 43 puntos abajo.',
    teamColor: '#00D2BE',
  },
  {
    year: 2017, champion: 'Lewis Hamilton', team: 'Mercedes', nationality: '🇬🇧',
    points: 363, wins: 9, podiums: 13, poles: 11,
    teamStrengths: ['Mercedes W08 potente', 'Motor EQ Power dominante', 'Estrategia adaptativa brillante'],
    highlights: 'Ferrari fue competitivo con Vettel pero Hamilton ganó los últimos 4 de 5 GP para el título.',
    teamColor: '#00D2BE',
  },
  {
    year: 2018, champion: 'Lewis Hamilton', team: 'Mercedes', nationality: '🇬🇧',
    points: 408, wins: 11, podiums: 17, poles: 11,
    teamStrengths: ['Mercedes W09 equilibrado', 'Gestión de neumáticos superior', 'Hamilton clutch en momentos clave'],
    highlights: 'Vettel cometió errores cruciales. Hamilton fue más consistente y cerró el quinto título.',
    teamColor: '#00D2BE',
  },
  {
    year: 2019, champion: 'Lewis Hamilton', team: 'Mercedes', nationality: '🇬🇧',
    points: 413, wins: 11, podiums: 17, poles: 5,
    teamStrengths: ['Mercedes W10 dominante', 'Motor más eficiente del paddock', 'Equipo perfectamente orquestado'],
    highlights: 'Sexto título de Hamilton igualando a Schumacher. Mercedes ganó ambos campeonatos de forma aplastante.',
    teamColor: '#00D2BE',
  },
  {
    year: 2020, champion: 'Lewis Hamilton', team: 'Mercedes', nationality: '🇬🇧',
    points: 347, wins: 11, podiums: 16, poles: 10,
    teamStrengths: ['Mercedes W11 el mejor coche de la historia', 'Motor híbrido insuperable', 'Aerodinámica perfeccionada'],
    highlights: 'Séptimo título igualando el récord de Schumacher. El W11 considerado el mejor coche de F1 ever.',
    teamColor: '#00D2BE',
  },
  {
    year: 2021, champion: 'Max Verstappen', team: 'Red Bull', nationality: '🇳🇱',
    points: 395.5, wins: 10, podiums: 18, poles: 10,
    teamStrengths: ['Red Bull RB16B agresivo', 'Honda PU competitiva final', 'Christian Horner estrategia audaz'],
    highlights: 'El título más polémico. Verstappen adelantó a Hamilton en la última vuelta del último GP en Abu Dhabi.',
    teamColor: '#1E3A5F',
  },
  {
    year: 2022, champion: 'Max Verstappen', team: 'Red Bull', nationality: '🇳🇱',
    points: 454, wins: 15, podiums: 17, poles: 9,
    teamStrengths: ['Red Bull RB18 era suelo dominante', 'Honda RBPTH001 potencia renovada', 'Adrian Newey vuelve al frente'],
    highlights: 'Verstappen aplastó la competencia con 15 victorias. Red Bull volvió al dominio total.',
    teamColor: '#1E3A5F',
  },
  {
    year: 2023, champion: 'Max Verstappen', team: 'Red Bull', nationality: '🇳🇱',
    points: 575, wins: 19, podiums: 21, poles: 12,
    teamStrengths: ['Red Bull RB19 perfección absoluta', 'Honda RBPTH002 más potente', 'Newey en cima creativa'],
    highlights: 'La temporada más dominante de todos los tiempos: 19 victorias de 22 carreras. Récord absoluto.',
    teamColor: '#1E3A5F',
  },
  {
    year: 2024, champion: 'Max Verstappen', team: 'Red Bull', nationality: '🇳🇱',
    points: 437, wins: 9, podiums: 14, poles: 8,
    teamStrengths: ['Red Bull RB20 todavía competitivo', 'McLaren comenzó a desafiar', 'Verstappen talento superior'],
    highlights: 'Cuarto título consecutivo de Verstappen pese a que McLaren y Ferrari se acercaron significativamente. Fue la temporada más disputada de la era Red Bull.',
    teamColor: '#1E3A5F',
  },
  {
    year: 2025, champion: 'Oscar Piastri', team: 'McLaren', nationality: '🇦🇺',
    points: 452, wins: 12, podiums: 18, poles: 10,
    teamStrengths: ['McLaren MCL39 dominio aerodinámico', 'Mercedes PU más eficiente del grid', 'Norris y Piastri dupla de élite', 'Andrea Stella estrategia impecable'],
    highlights: 'Piastri se convirtió en el primer australiano campeón del mundo desde Jack Brabham en 1966. McLaren construyó sobre la ventaja de 2024 y desarrolló el MCL39 como el coche más rápido del campeonato. Verstappen luchó hasta Singapur pero McLaren fue imparable en la segunda mitad de la temporada.',
    teamColor: '#FF8000',
  },
]

function StatBar({ value, max, color }) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div style={{ background: '#1e293b', borderRadius: 4, height: 6, overflow: 'hidden', flex: 1 }}>
      <div style={{
        width: `${pct}%`, height: '100%', borderRadius: 4,
        background: color,
        transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
      }} />
    </div>
  )
}

// ── Logos de escuderías ──────────────────────────────────────────────────────
const TEAM_LOGOS = {
  'Ferrari':        'https://www.ferrari.com/etc.clientlibs/ferrari/components/brandheader/clientlibs/resources/ferrari-logo.svg',
  'McLaren':        'https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg',
  'Red Bull':       'https://upload.wikimedia.org/wikipedia/en/9/94/Red_Bull_Racing_logo.svg',
  'Mercedes':       'https://upload.wikimedia.org/wikipedia/commons/9/93/Mercedes_Logo.svg',
  'Williams':       'https://upload.wikimedia.org/wikipedia/commons/f/f0/Williams_Racing_logo%2C_2020.svg',
  'Renault':        null,
  'Alfa Romeo':     null,
  'Benetton':       null,
  'Brawn GP':       null,
  'Brabham':        null,
  'Lotus':          null,
  'Tyrrell':        null,
  'Cooper':         null,
  'BRM':            null,
  'Maserati':       null,
  'Maserati / Mercedes': null,
  'Matra':          null,
}

const TEAM_ABBR = {
  'Ferrari': 'FER', 'McLaren': 'MCL', 'Red Bull': 'RBR', 'Mercedes': 'MER',
  'Williams': 'WIL', 'Renault': 'REN', 'Alfa Romeo': 'ALF', 'Benetton': 'BEN',
  'Brawn GP': 'BGP', 'Brabham': 'BRA', 'Lotus': 'LOT', 'Tyrrell': 'TYR',
  'Cooper': 'COO', 'BRM': 'BRM', 'Maserati': 'MAS', 'Matra': 'MAT',
  'Maserati / Mercedes': 'M/M',
}

function TeamLogo({ team, color, height = 22 }) {
  const [imgOk, setImgOk] = React.useState(true)
  const url = TEAM_LOGOS[team]

  if (!url || !imgOk) {
    return (
      <div style={{
        height, minWidth: 32,
        background: `${color}22`,
        border: `1px solid ${color}66`,
        borderRadius: 4,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 6px',
        fontSize: '0.5rem', fontWeight: 800,
        color: color === '#FFFFFF' ? '#94a3b8' : color,
        letterSpacing: '0.08em',
        flexShrink: 0,
      }}>
        {TEAM_ABBR[team] || team.slice(0, 3).toUpperCase()}
      </div>
    )
  }

  return (
    <img
      src={url}
      alt={team}
      height={height}
      style={{
        objectFit: 'contain',
        maxWidth: 54,
        flexShrink: 0,
        filter: 'brightness(0) invert(1) opacity(0.85)',
      }}
      onError={() => setImgOk(false)}
    />
  )
}

const titleRanking = Object.entries(
  F1_DATA.reduce((acc, d) => { acc[d.champion] = (acc[d.champion] || 0) + 1; return acc }, {})
).sort((a, b) => b[1] - a[1])

const globalStats = [
  { label: 'TEMPORADAS', value: F1_DATA.length, color: '#60a5fa' },
  { label: 'CAMPEONES ÚNICOS', value: [...new Set(F1_DATA.map(d => d.champion))].length, color: '#c084fc' },
  { label: 'ESCUDERÍAS', value: [...new Set(F1_DATA.map(d => d.team))].length, color: '#ffd700' },
  { label: 'MÁX VICTORIAS', value: Math.max(...F1_DATA.map(d => d.wins)), color: '#dc143c' },
]

// ── Bloque temporada actual (dinámica) ───────────────────────────────────────
const DEFAULT_SEASON = {
  year: null,
  races: [],
  allDrivers: [],
  allConstructors: [],
  totalRacesScheduled: 0,
  totalRacesRun: 0,
  lastUpdated: null,
  loading: true,
  error: null,
}

function SeasonCurrentBlock() {
  const [data, setData] = React.useState(DEFAULT_SEASON)

  React.useEffect(() => { fetchData() }, [])

  async function fetchData() {
    setData(prev => ({ ...prev, loading: true, error: null }))
    try {
      const BASE = 'https://api.jolpi.ca/ergast/f1/current'
      const [rResults, rDrivers, rConstructors, rSchedule] = await Promise.all([
        fetch(`${BASE}/results/?limit=400&format=json`),
        fetch(`${BASE}/driverStandings/?format=json`),
        fetch(`${BASE}/constructorStandings/?format=json`),
        fetch(`${BASE}.json?format=json`),
      ])
      const [jResults, jDrivers, jConstructors, jSchedule] = await Promise.all([
        rResults.json(), rDrivers.json(), rConstructors.json(), rSchedule.json(),
      ])

      const year = jSchedule?.MRData?.RaceTable?.season || '—'

      // Carreras disputadas
      const racesRaw = jResults?.MRData?.RaceTable?.Races || []
      const races = racesRaw.map(r => ({
        round: Number(r.round),
        name: r.raceName.replace(' Grand Prix', ' GP'),
        circuit: r.Circuit?.circuitName || '',
        country: r.Circuit?.Location?.country || '',
        date: r.date,
        winner: r.Results?.[0]
          ? `${r.Results[0].Driver.givenName} ${r.Results[0].Driver.familyName}`
          : '—',
        winnerTeam: r.Results?.[0]?.Constructor?.name || '—',
        winnerTime: r.Results?.[0]?.Time?.time || r.Results?.[0]?.status || '—',
        fastestLap: r.Results?.find(x => x.FastestLap?.rank === '1'),
        grid: r.Results?.[0]?.grid || '—',
        laps: r.Results?.[0]?.laps || '—',
        points: r.Results?.[0]?.points || '—',
      }))

      // Calendario total
      const scheduleRaw = jSchedule?.MRData?.RaceTable?.Races || []

      // Drivers standings
      const driversRaw = jDrivers?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || []
      const allDrivers = driversRaw.map(s => ({
        pos: Number(s.position),
        driver: `${s.Driver.givenName} ${s.Driver.familyName}`,
        code: s.Driver.code || '',
        team: s.Constructors?.[0]?.name || '—',
        points: Number(s.points),
        wins: Number(s.wins),
        nationality: s.Driver.nationality,
      }))

      // Constructors standings
      const consRaw = jConstructors?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || []
      const allConstructors = consRaw.map(s => ({
        pos: Number(s.position),
        team: s.Constructor.name,
        points: Number(s.points),
        wins: Number(s.wins),
      }))

      // Stat: diferentes ganadores
      const winners = [...new Set(races.map(r => r.winner))]
      // Stat: diferencia líder vs 2do
      const gap = allDrivers.length > 1 ? allDrivers[0].points - allDrivers[1].points : 0

      setData({
        year,
        races,
        allDrivers,
        allConstructors,
        totalRacesScheduled: scheduleRaw.length,
        totalRacesRun: races.length,
        uniqueWinners: winners.length,
        gap,
        lastUpdated: new Date().toLocaleString('es-ES'),
        loading: false,
        error: null,
      })
    } catch (e) {
      setData(prev => ({
        ...prev, loading: false,
        error: 'No se pudo conectar con la API. Verifica tu conexión.',
        lastUpdated: new Date().toLocaleString('es-ES'),
      }))
    }
  }

  const { year, races, allDrivers, allConstructors, totalRacesRun, totalRacesScheduled,
          uniqueWinners, gap, loading, error, lastUpdated } = data
  const hasData = allDrivers.length > 0
  const leader = allDrivers[0]
  const maxPts = allDrivers[0]?.points || 1
  const maxConsPts = allConstructors[0]?.points || 1
  const lastRaces = [...races].reverse().slice(0, 6)
  const pct = totalRacesScheduled > 0 ? Math.round((totalRacesRun / totalRacesScheduled) * 100) : 0

  return (
    <div style={{
      background: 'linear-gradient(135deg, #071a0a, #0a1a10, #0d1525)',
      border: '2px solid #22c55e66',
      borderRadius: 20,
      padding: '24px',
      marginBottom: 32,
      boxShadow: '0 0 60px #22c55e14',
      position: 'relative',
    }}>
      {/* Barra animada top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3, borderRadius: '20px 20px 0 0',
        background: 'linear-gradient(90deg, #22c55e, #86efac, #22c55e)',
        animation: 'pulse 2.5s ease-in-out infinite',
      }} />

      {/* ── ENCABEZADO ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            background: 'linear-gradient(135deg, #14532d, #166534)',
            border: '1px solid #22c55e55',
            borderRadius: 12,
            padding: '10px 20px',
            textAlign: 'center',
            boxShadow: '0 0 20px #22c55e22',
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#22c55e', lineHeight: 1 }}>
              {loading ? '···' : year}
            </div>
            <div style={{ fontSize: '0.48rem', color: '#86efac', letterSpacing: '0.25em', marginTop: 3 }}>
              EN CURSO
            </div>
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '0.06em' }}>
              TEMPORADA ACTUAL — FÓRMULA 1
            </div>
            {hasData && (
              <div style={{ fontSize: '0.6rem', color: '#4ade80', letterSpacing: '0.14em', marginTop: 4 }}>
                RONDA {totalRacesRun} DE {totalRacesScheduled} · {pct}% COMPLETADA
              </div>
            )}
            {lastUpdated && (
              <div style={{ fontSize: '0.52rem', color: '#334155', marginTop: 3 }}>
                Actualizado: {lastUpdated}
              </div>
            )}
          </div>
        </div>

        {/* Botón */}
        <button onClick={fetchData} disabled={loading} style={{
          background: loading ? '#0d1a0d' : 'linear-gradient(135deg, #166534, #15803d)',
          border: `1px solid ${loading ? '#22c55e22' : '#22c55e77'}`,
          borderRadius: 10, padding: '10px 22px',
          color: loading ? '#22c55e44' : '#fff',
          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
          cursor: loading ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'monospace',
          boxShadow: loading ? 'none' : '0 4px 20px #22c55e22',
          transition: 'all 0.2s', flexShrink: 0,
        }}>
          <svg style={{ width: 14, height: 14, animation: loading ? 'spin 1s linear infinite' : 'none' }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {loading ? 'CARGANDO...' : 'ACTUALIZAR DATOS'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div style={{
          background: '#dc143c11', border: '1px solid #dc143c44', borderRadius: 8,
          padding: '10px 14px', marginBottom: 18,
          fontSize: '0.72rem', color: '#f87171',
        }}>⚠ {error}</div>
      )}

      {/* Loading skeleton */}
      {loading && !hasData && (
        <div style={{ textAlign: 'center', padding: '40px 0', color: '#22c55e44', fontSize: '0.75rem', letterSpacing: '0.2em' }}>
          CARGANDO TEMPORADA EN TIEMPO REAL...
        </div>
      )}

      {hasData && (
        <>
          {/* ── DATOS CLAVE ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10, marginBottom: 24 }}>
            {[
              { label: 'LÍDER', value: leader?.driver?.split(' ').pop() || '—', sub: leader?.team || '', color: '#22c55e' },
              { label: 'PUNTOS LÍDER', value: leader?.points || 0, sub: `+${gap} sobre P2`, color: '#ffd700' },
              { label: 'VICTORIAS LÍDER', value: leader?.wins || 0, sub: 'en temporada', color: '#ff8c00' },
              { label: 'CARRERAS', value: `${totalRacesRun}/${totalRacesScheduled}`, sub: `${pct}% completada`, color: '#60a5fa' },
              { label: 'GANADORES', value: uniqueWinners || 0, sub: 'pilotos distintos', color: '#c084fc' },
            ].map(s => (
              <div key={s.label} style={{
                background: '#0a140a', border: '1px solid #1e2e1e',
                borderRadius: 10, padding: '12px 14px',
              }}>
                <div style={{ fontSize: '0.48rem', color: '#475569', letterSpacing: '0.2em', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.5rem', color: '#334155', marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* ── BARRA PROGRESO TEMPORADA ── */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: '0.52rem', color: '#475569', letterSpacing: '0.15em' }}>PROGRESO DE TEMPORADA</span>
              <span style={{ fontSize: '0.52rem', color: '#22c55e', fontWeight: 700 }}>{pct}%</span>
            </div>
            <div style={{ background: '#0d1a0d', borderRadius: 4, height: 8, overflow: 'hidden' }}>
              <div style={{
                width: `${pct}%`, height: '100%', borderRadius: 4,
                background: 'linear-gradient(90deg, #16a34a, #22c55e, #86efac)',
                transition: 'width 1s ease',
              }} />
            </div>
          </div>

          {/* ── GRILLA DE TABLAS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.85fr 1fr', gap: 16, marginBottom: 20, alignItems: 'start' }}>

            {/* ─ Panel Pilotos ─ */}
            <div style={{
              background: '#060e08',
              border: '1px solid #1a2e1a',
              borderRadius: 14,
              overflow: 'hidden',
            }}>
              {/* Header panel */}
              <div style={{
                background: 'linear-gradient(90deg, #0d2410, #071207)',
                borderBottom: '1px solid #1a2e1a',
                padding: '10px 14px',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ fontSize: '0.85rem' }}>🏎</span>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#4ade80', letterSpacing: '0.2em', fontFamily: 'monospace' }}>
                  CAMPEONATO DE PILOTOS
                </span>
              </div>
              {/* Col headers */}
              <div style={{
                display: 'grid', gridTemplateColumns: '32px 1fr 52px 30px',
                padding: '6px 14px',
                borderBottom: '1px solid #0f1a0f',
              }}>
                {[['#','left'],['PILOTO','left'],['PTS','right'],['V','right']].map(([h, align]) => (
                  <div key={h} style={{ fontSize: '0.55rem', color: '#334155', fontFamily: 'monospace', letterSpacing: '0.15em', textAlign: align }}>{h}</div>
                ))}
              </div>
              {/* Filas */}
              {allDrivers.map((d, i) => {
                const barPct = Math.round((d.points / maxPts) * 100)
                const podiumColor = i === 0 ? '#ffd700' : i === 1 ? '#c0c0c0' : i === 2 ? '#cd7f32' : null
                return (
                  <div key={d.driver} style={{
                    display: 'grid', gridTemplateColumns: '32px 1fr 52px 30px',
                    alignItems: 'center',
                    padding: '7px 14px',
                    background: i === 0 ? '#0a1f0c' : i % 2 === 0 ? '#06100700' : '#040c0500',
                    borderBottom: '1px solid #0b180b',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    {/* barra proporcional de fondo */}
                    <div style={{
                      position: 'absolute', left: 0, top: 0, bottom: 0,
                      width: `${barPct}%`,
                      background: i === 0 ? '#22c55e0c' : '#ffffff03',
                      pointerEvents: 'none',
                    }} />
                    <div style={{
                      fontSize: '0.78rem', fontWeight: 800, fontFamily: 'monospace',
                      color: podiumColor || '#334155',
                    }}>{d.pos}</div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: i === 0 ? '#fff' : '#e2e8f0', lineHeight: 1.2 }}>{d.driver}</div>
                      <div style={{ fontSize: '0.65rem', color: '#374151', marginTop: 1 }}>{d.team}</div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '0.9rem', fontWeight: 800, color: i === 0 ? '#22c55e' : '#4b5563', fontFamily: 'monospace' }}>{d.points}</div>
                    <div style={{ textAlign: 'right', fontSize: '0.78rem', fontWeight: 700, color: d.wins > 0 ? '#ffd700' : '#1a2a1a', fontFamily: 'monospace' }}>
                      {d.wins > 0 ? d.wins : '·'}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* ─ Panel Constructores ─ */}
            <div style={{
              background: '#060e08',
              border: '1px solid #1a2e1a',
              borderRadius: 14,
              overflow: 'hidden',
            }}>
              <div style={{
                background: 'linear-gradient(90deg, #0d2410, #071207)',
                borderBottom: '1px solid #1a2e1a',
                padding: '10px 14px',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ fontSize: '0.85rem' }}>🏁</span>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#4ade80', letterSpacing: '0.2em', fontFamily: 'monospace' }}>
                  CONSTRUCTORES
                </span>
              </div>
              <div style={{ padding: '8px 0' }}>
                {allConstructors.map((c, i) => {
                  const barPct = Math.round((c.points / maxConsPts) * 100)
                  const podiumColor = i === 0 ? '#ffd700' : i === 1 ? '#c0c0c0' : i === 2 ? '#cd7f32' : null
                  return (
                    <div key={c.team} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '8px 14px',
                      borderBottom: '1px solid #0b180b',
                      position: 'relative', overflow: 'hidden',
                      background: i === 0 ? '#0a1f0c' : 'transparent',
                    }}>
                      <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0,
                        width: `${barPct}%`, background: i === 0 ? '#22c55e0c' : '#ffffff03',
                        pointerEvents: 'none',
                      }} />
                      <div style={{
                        fontSize: '0.78rem', fontWeight: 800, fontFamily: 'monospace',
                        color: podiumColor || '#334155', flexShrink: 0, width: 16,
                      }}>{c.pos}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: i === 0 ? '#f1f5f9' : '#9ca3af' }}>{c.team}</div>
                        {c.wins > 0 && <div style={{ fontSize: '0.6rem', color: '#ffd70099', marginTop: 1 }}>{c.wins} victoria{c.wins > 1 ? 's' : ''}</div>}
                      </div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: i === 0 ? '#22c55e' : '#4b5563', fontFamily: 'monospace' }}>{c.points}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ─ Panel Últimas carreras ─ */}
            {lastRaces.length > 0 && (
              <div style={{
                background: '#060e08',
                border: '1px solid #1a2e1a',
                borderRadius: 14,
                overflow: 'hidden',
              }}>
                <div style={{
                  background: 'linear-gradient(90deg, #0d2410, #071207)',
                  borderBottom: '1px solid #1a2e1a',
                  padding: '10px 14px',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ fontSize: '0.85rem' }}>🏆</span>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#4ade80', letterSpacing: '0.2em', fontFamily: 'monospace' }}>
                    ÚLTIMAS CARRERAS
                  </span>
                </div>
                <div style={{ padding: '8px 0' }}>
                  {lastRaces.map((r, i) => (
                    <div key={r.round} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      padding: '9px 14px',
                      borderBottom: '1px solid #0b180b',
                      background: i === 0 ? '#0a1f0c' : 'transparent',
                    }}>
                      <div style={{
                        background: '#22c55e18', border: '1px solid #22c55e2a',
                        borderRadius: 6, padding: '3px 7px', flexShrink: 0,
                        fontSize: '0.55rem', color: '#22c55e', fontWeight: 700, fontFamily: 'monospace',
                        marginTop: 2,
                      }}>R{r.round}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</div>
                        <div style={{ fontSize: '0.65rem', color: '#22c55e', marginTop: 3 }}>{r.winner}</div>
                        <div style={{ fontSize: '0.6rem', color: '#374151', marginTop: 1 }}>{r.winnerTeam}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// ── CSS para animaciones ─────────────────────────────────────────────────────
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
  @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
  .f1-year-card:hover { transform: translateY(-2px) !important; }
`
document.head.appendChild(styleSheet)

// ── Componente principal ─────────────────────────────────────────────────────
export default function F1Timeline() {
  const [selected, setSelected] = React.useState(null)
  const maxWins   = Math.max(...F1_DATA.map(d => d.wins))
  const maxPoints = Math.max(...F1_DATA.map(d => d.points))
  const sortedData = [...F1_DATA].reverse()

  const selectedData = selected ? F1_DATA.find(d => d.year === selected) : null

  // Agrupar por décadas para la sección de filtro rápido
  const decades = [...new Set(F1_DATA.map(d => Math.floor(d.year / 10) * 10))].sort((a,b) => b-a)
  const [filterDecade, setFilterDecade] = React.useState(null)
  const displayData = filterDecade
    ? sortedData.filter(d => Math.floor(d.year / 10) * 10 === filterDecade)
    : sortedData

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', color: '#e2e8f0', fontFamily: 'sans-serif' }}>

      {/* ── Header sticky ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0e1a 0%, #140010 50%, #0a0e1a 100%)',
        borderBottom: '2px solid #dc143c44',
        padding: '12px 0 10px',
        position: 'sticky', top: 64, zIndex: 10,
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 20 }}>
          <img
            src="https://creativereview.imgix.net/uploads/2017/11/F1-logo-red-on-white.png?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1200&h=750"
            alt="Formula 1"
            style={{ height: 38, objectFit: 'contain', borderRadius: 5, background: '#fff', padding: '2px 7px', boxShadow: '0 0 20px #dc143c55' }}
          />
          <div>
            <h1 style={{
              margin: 0, fontSize: '1.05rem', fontWeight: 800, letterSpacing: '0.14em',
              background: 'linear-gradient(90deg, #dc143c, #ff6b6b, #ffd700)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textTransform: 'uppercase',
            }}>LÍNEA DEL TIEMPO — CAMPEONES DEL MUNDO</h1>
            <div style={{ fontSize: '0.55rem', color: '#64748b', letterSpacing: '0.2em', marginTop: 2 }}>
              1950 — 2026 · {F1_DATA.length} TEMPORADAS COMPLETADAS + TEMPORADA EN CURSO
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENIDO ── */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px 40px' }}>

        {/* Separador visual generoso */}
        <div style={{ height: 48 }} />

        {/* ── BLOQUE TEMPORADA ACTUAL ── */}
        <SeasonCurrentBlock />

        <div style={{ height: 48 }} />

        {/* ── HISTÓRICO ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, #dc143c55, transparent)' }} />
          <div style={{ fontSize: '0.6rem', color: '#dc143c', letterSpacing: '0.3em', fontWeight: 700, fontFamily: 'monospace' }}>
            ARCHIVO HISTÓRICO DE CAMPEONES
          </div>
          <div style={{ height: 1, flex: 1, background: 'linear-gradient(270deg, #dc143c55, transparent)' }} />
        </div>

        {/* Filtro por décadas */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          <button
            onClick={() => setFilterDecade(null)}
            style={{
              background: !filterDecade ? '#dc143c' : '#1e293b',
              border: `1px solid ${!filterDecade ? '#dc143c' : '#334155'}`,
              borderRadius: 20, padding: '5px 14px',
              fontSize: '0.65rem', fontWeight: 700, color: '#fff',
              cursor: 'pointer', fontFamily: 'monospace', letterSpacing: '0.1em',
              transition: 'all 0.15s',
            }}>TODAS</button>
          {decades.map(d => (
            <button key={d}
              onClick={() => setFilterDecade(filterDecade === d ? null : d)}
              style={{
                background: filterDecade === d ? '#dc143c' : '#1e293b',
                border: `1px solid ${filterDecade === d ? '#dc143c' : '#334155'}`,
                borderRadius: 20, padding: '5px 14px',
                fontSize: '0.65rem', fontWeight: 700, color: filterDecade === d ? '#fff' : '#94a3b8',
                cursor: 'pointer', fontFamily: 'monospace', letterSpacing: '0.1em',
                transition: 'all 0.15s',
              }}>{d}s</button>
          ))}
          <div style={{ marginLeft: 'auto', fontSize: '0.6rem', color: '#475569', alignSelf: 'center', fontFamily: 'monospace' }}>
            {displayData.length} temporada{displayData.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* ── GRID DE TARJETAS DE AÑO ── */}
        <div style={{ position: 'relative', paddingLeft: 80 }}>
          {/* Línea vertical de la timeline */}
          <div style={{
            position: 'absolute', left: 56, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, #dc143c, #ffd70066, #dc143c88)',
          }} />

          {displayData.map((d) => {
            const isSel = selected === d.year
            return (
              <div key={d.year} style={{ display: 'flex', gap: 0, marginBottom: 8, alignItems: 'flex-start' }}>

                {/* Año + dot — fuera del padding */}
                <div style={{
                  position: 'absolute', left: 0, display: 'flex', alignItems: 'center', gap: 8,
                  paddingTop: 14, width: 80,
                }}>
                  <div style={{
                    fontSize: '0.62rem', fontWeight: 700,
                    color: isSel ? '#ffd700' : '#475569',
                    fontFamily: 'monospace', textAlign: 'right', flex: 1,
                    transition: 'color 0.2s',
                  }}>{d.year}</div>
                  <div style={{
                    width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
                    background: isSel ? '#ffd700' : d.teamColor,
                    border: `2px solid ${isSel ? '#ffd700' : d.teamColor}88`,
                    boxShadow: isSel ? '0 0 12px #ffd70088' : `0 0 6px ${d.teamColor}55`,
                    transition: 'all 0.2s',
                    zIndex: 1,
                  }} />
                </div>

                {/* Card compacta / expandida */}
                <div
                  onClick={() => setSelected(isSel ? null : d.year)}
                  style={{
                    flex: 1,
                    background: isSel
                      ? `linear-gradient(135deg, ${d.teamColor}22, #141b2d)`
                      : 'linear-gradient(135deg, #141b2d, #0d1220)',
                    border: `1px solid ${isSel ? d.teamColor + '77' : d.teamColor + '22'}`,
                    borderRadius: 12,
                    padding: '10px 16px',
                    cursor: 'pointer',
                    boxShadow: isSel ? `0 4px 24px ${d.teamColor}22` : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {/* Fila siempre visible */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
                    {/* Piloto + equipo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: '1.1rem' }}>{d.nationality}</span>
                      <div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.2 }}>
                          {d.champion}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}>
                          <TeamLogo team={d.team} color={d.teamColor} height={14} />
                          <span style={{ fontSize: '0.6rem', color: d.teamColor, fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                            {d.team.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats en línea */}
                    <div style={{ display: 'flex', gap: 14 }}>
                      {[
                        { v: d.wins, l: 'V', c: '#ffd700' },
                        { v: d.podiums, l: 'POD', c: '#94a3b8' },
                        { v: d.poles, l: 'PP', c: '#c084fc' },
                        { v: d.points, l: 'PTS', c: '#60a5fa' },
                      ].map(s => (
                        <div key={s.l} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: s.c, lineHeight: 1, fontFamily: 'monospace' }}>{s.v}</div>
                          <div style={{ fontSize: '0.48rem', color: '#334155', marginTop: 2, fontFamily: 'monospace', letterSpacing: '0.1em' }}>{s.l}</div>
                        </div>
                      ))}
                    </div>

                    {/* Flecha indicadora */}
                    <svg style={{
                      width: 14, height: 14, color: '#475569',
                      transform: isSel ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s', flexShrink: 0,
                    }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Detalle expandido */}
                  {isSel && (
                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${d.teamColor}33`, animation: 'fadeIn 0.2s ease' }}>
                      {/* Barras */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontSize: '0.55rem', color: '#475569', width: 60, fontFamily: 'monospace', letterSpacing: '0.1em', flexShrink: 0 }}>VICTORIAS</span>
                          <StatBar value={d.wins} max={maxWins} color='#ffd700' />
                          <span style={{ fontSize: '0.7rem', color: '#ffd700', fontWeight: 700, fontFamily: 'monospace', width: 22, textAlign: 'right' }}>{d.wins}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontSize: '0.55rem', color: '#475569', width: 60, fontFamily: 'monospace', letterSpacing: '0.1em', flexShrink: 0 }}>PUNTOS</span>
                          <StatBar value={d.points} max={maxPoints} color='#60a5fa' />
                          <span style={{ fontSize: '0.7rem', color: '#60a5fa', fontWeight: 700, fontFamily: 'monospace', width: 36, textAlign: 'right' }}>{d.points}</span>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                        {/* Resumen */}
                        <div>
                          <div style={{ fontSize: '0.52rem', color: '#475569', letterSpacing: '0.2em', marginBottom: 8, fontFamily: 'monospace' }}>
                            RESUMEN DE TEMPORADA
                          </div>
                          <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.75 }}>
                            {d.highlights}
                          </p>
                        </div>

                        {/* Fortalezas */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                            <TeamLogo team={d.team} color={d.teamColor} height={16} />
                            <span style={{ fontSize: '0.52rem', color: '#475569', letterSpacing: '0.2em', fontFamily: 'monospace' }}>
                              FORTALEZAS
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {d.teamStrengths.map((s, idx) => (
                              <div key={idx} style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                background: `${d.teamColor}11`, border: `1px solid ${d.teamColor}33`,
                                borderRadius: 8, padding: '7px 10px',
                              }}>
                                <div style={{ width: 5, height: 5, borderRadius: '50%', background: d.teamColor, flexShrink: 0 }} />
                                <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{s}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
