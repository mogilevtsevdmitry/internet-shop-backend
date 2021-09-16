export const dbConfig = {
  type: process.env.DB_TYPE as 'aurora-data-api',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  dropSchema: false,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
