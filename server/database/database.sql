Create database megalomaniac

create table usuarios(
	us_id serial primary key,
	us_email varchar(40),
	us_password varchar(100),
	us_img varchar(200)
)


create table posts(
	ps_id serial primary key,
	ps_us_id int,
	ps_titulo varchar(50),
	ps_descripcion varchar(100),
	ps_img varchar(200)
)

create table favoritos(
	fv_id serial primary key,
	fv_us_id int,
	fv_ps_id int
)