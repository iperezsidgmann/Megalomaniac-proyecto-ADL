Create database megalomaniac

create table usuarios(
	us_id serial primary key,
	us_email varchar(40),
	us_password varchar(30),
	us_img varchar(200)
)


create table posts(
	ps_id int primary key,
	ps_us_id int,
	ps_descripcion varchar(100),
	ps_img varchar(200),
	ps_titulo varchar(50)
)


create table favoritos(
	fv_id serial primary key,
	fv_us_id int,
	fv_ps_id int
)

alter table posts
add constraint fk_posts_usuarios foreign key (ps_us_id)
references usuarios(us_id);

alter table favoritos
add constraint fk_usuarios_favoritos foreign key (fv_us_id)
references usuarios(us_id)

alter table favoritos 
add constraint fk_posts_favoritos foreign key (fv_ps_id)
references posts(ps_id)