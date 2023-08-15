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
	ps_band varchar(100),
	ps_album varchar(100),
	ps_albumimage varchar (255),
	ps_albumyear varchar(4),
	ps_category varchar(100)
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
references posts(ps_id) on delete cascade;

/*Recomiendo realizar inserción de datos a la tabla Usuarios con la API para que queden las contraseñas encriptadas

Para que los datos de la tabla posts funcionen correctamente, crear minimo 3 usuarios ya que los registros se encuentran seteados para que tomen 3 usuarios, de igual forma se puede modificar el script con un usuario del campo ps_us_id
*/

/*Inserción de datos a Tabla Posts*/

insert into posts (ps_us_id, ps_band, ps_album, ps_albumimage, ps_albumyear, ps_category) values
(1, 'Septicflesh', 'Codex Omega', 'https://m.media-amazon.com/images/I/714ERtxPqfL.jpg', '2017', 'Metal'),
(1, 'Ouroboros', 'Emanations', 'https://i.scdn.co/image/ab67616d0000b273df85f443a7c7777acaaf5a59', '2015', 'Metal'),
(2, 'Metallica', 'Master of Puppets', 'https://i.ebayimg.com/images/g/0IwAAOSw~7JcXZNt/s-l500.jpg', '1986', 'Metal'),
(2, 'Iron Maiden', 'The Number Of The Beast', 'https://cdnx.jumpseller.com/discos-mayra/image/11960642/79.jpg?1656955147', '1982', 'Metal'),
(2, 'Slipknot', 'Inmortal', 'https://www.nacionrock.com/wp-content/uploads/61AuKda6KRL.jpg', '1999', 'Metal'),
(1, 'Judas Priest', 'Painkiller', 'https://upload.wikimedia.org/wikipedia/en/1/16/Judaspainkiller.JPG', '1990', 'Metal'),
(2, 'Black Sabbath', 'Forbidden', 'https://www.rockaxis.com/rxidashboard/wisi_photos/1624294788_forbidden.jpg', '1985', 'Rock'),
(3, 'Led Zeppelin', 'Remasters', 'https://i.discogs.com/7Yb_qksQiUFV_53L178XQyJaUfmi9Lo9h1KsQGzMdxQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5MDkw/Ni0xMTM3MDEyMDA0/LmpwZWc.jpeg', '1990', 'Rock'),
(1, 'Deep Purple', 'Burn', 'https://www.rockaxis.com/img/newsList/8779691.jpg', '2011', 'Rock'),
(1, 'Jethro Tull', 'Stand Up', 'https://updatemexico.com/wp-content/uploads/2019/07/Jethro-Tull-Stand-Up-03.jpg', '1972', 'Rock'),
(2, 'Bob Dylan', 'Highway 61 Revisited', 'https://www.dirtyrock.info/wp-content/uploads/2021/08/bob-dylan-Highway-61-Revisited-disco-aniversario.jpg', '1965', 'Folk'),
(2, 'Cat Stevens', 'Greatest Hits', 'https://i.ebayimg.com/images/g/5zgAAOSwUBxkpelp/s-l1600.jpg', '1975', 'Folk'),
(2, 'The Byrds', 'Eight Miles High', 'https://i.discogs.com/M4r8pCzPp8nL3yHd43B73eEIF6fkpb93Vz4yRHNkdoI/rs:fit/g:sm/q:90/h:579/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMTkw/NjEyLTE1NzU4NDc3/MDQtMjAzNC5qcGVn.jpeg', '1966', 'Folk'),
(1, 'Neil Young', 'Everybody knows this is nowhere', 'https://www.diariocritico.com/album/imagenes/141/everybody.jpg', '1969', 'Folk'),
(3, 'Micheal Jackson', 'Dangerous', 'https://i.discogs.com/FeDM1O-95bpjZsMw1tdY3TvkMOEDYmBppsIVqST1rCg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxMTYw/OS0xNTA5MDY3ODI0/LTYwNzIuanBlZw.jpeg', '1991', 'Pop'),
(2, 'Madonna', 'Ray Of Light', 'https://i.ebayimg.com/images/g/DXMAAOSwHfBiLKbo/s-l500.jpg', '1998', 'Pop'),
(3, 'Cher', 'I Walk Alone', 'https://www.lahiguera.net/musicalia/artistas/cher/disco/5185/tema/7402/cher_i_walk_alone-portada.jpg', '2014', 'Pop'),
(1, 'Lady Gaga', 'ArtPop', 'https://www.lahiguera.net/musicalia/artistas/lady_gaga/disco/4971/lady_gaga_artpop-portada.jpg', '2013', 'Pop'),
(3, 'Lucybell', 'Peces', 'https://vinilospormayor.cl/cdn/shop/products/R-4903791-1581957407-4101_1200x1200.jpg?v=1657925652', '1995', 'Rock'),
(3, 'Lucybell', 'Viajar', 'https://i.discogs.com/kUi7CzOQEuKMGIar5s5xnSzy6DQGqmqNc_PPd0u1HXY/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyODEw/OTktMTM4OTQ4MzMx/MC01MjE4LmpwZWc.jpeg', '1996', 'Rock'),
(3, 'Coldplay', 'Parachutes', 'https://i.pinimg.com/originals/5b/c5/22/5bc522cf1e82f5299a738f9c324e9c59.jpg', '2000', 'Rock')

/*Inserción de datos a Tabla Favoritos, seguir las instrucciones de los 3 usuarios o modificar el script*/

Insert Into Favoritos (fv_us_id, fv_ps_id) values(3,10);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,10);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(2,17);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,19);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(3,8);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(2,14);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(2,15);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,11);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,15);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,20);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(2,18);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(2,13);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(3,5);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,18);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,5);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,21);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(2,1);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(2,18);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(3,14);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(3,19);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(3,20);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(2,7);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,1);
Insert Into Favoritos (fv_us_id, fv_ps_id) values(1,2);