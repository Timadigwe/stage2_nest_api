module.exports = {
  type: 'postgres',
  host: 'postgres://timdb_ifhr_user:HHrTEB1pMXRQF3tWTxZT6fuPAZiRGMhz@dpg-ck2mlnfqj8ts73fb4id0-a.oregon-postgres.render.com/timdb_ifhr', // e.g., localhost or database URL
  port: 5432, // PostgreSQL port
  username: 'timdb_ifhr_user',
  password: 'HHrTEB1pMXRQF3tWTxZT6fuPAZiRGMhz',
  database: 'timdb_ifhr',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
};
