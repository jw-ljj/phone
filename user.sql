set names utf8;
drop database if exists user;
create database user charset=utf8;
 use user;
 create table log_reg(
 uid int primary key auto_increment,
  uname char(10) unique not null,
	pwd char(10) not null
  );
 
 create table info(
 iid int primary key auto_increment,
 uname char(10) unique not null,
 sex boolean,
 age int not null,
 email char(20),
 phone char(11) unique not null
 );

insert into log_reg values(null,"root","123");
insert into info values(null,"陆俊洁",1,24,"1584151593@qq.com","17623665429");
insert into info values(null,"陆俊洁1",0,22,"17623665429@163.com","13110136182");
insert into info values(null,"陆峰",1,50,"15310077129@163.com","13036352038");
insert into info values(null,"陆春丽",0,22,"13206123418@163.com","13206123418");


insert into info values(null,"陆俊洁11",0,22,"17623665429@163.com","13310136182");
insert into info values(null,"陆峰1",1,50,"15310077129@163.com","13036355038");
insert into info values(null,"陆春丽1",0,22,"13206123418@163.com","13296123418");
insert into info values(null,"陆俊洁12",0,22,"17623665429@163.com","13210136182");
insert into info values(null,"陆峰2",1,50,"15310077129@163.com","13036152038");
insert into info values(null,"陆春丽2",0,22,"13206123418@163.com","13236123418");
insert into info values(null,"陆俊洁13",0,22,"17623665429@163.com","13710136182");
insert into info values(null,"陆峰3",1,50,"15310077129@163.com","13036952038");
insert into info values(null,"陆春丽3",0,22,"13206123418@163.com","13706113418");
insert into info values(null,"陆俊洁14",0,22,"17623665429@163.com","13190136182");
insert into info values(null,"陆峰4",1,50,"15310077129@163.com","13036392038");
insert into info values(null,"陆春丽4",0,22,"13206123418@163.com","15296123418");
insert into info values(null,"陆俊洁15",0,22,"17623665429@163.com","13119136182");
insert into info values(null,"陆峰5",1,50,"15310077129@163.com","13076352038");
insert into info values(null,"陆春丽5",0,22,"13206123418@163.com","13202123418");
insert into info values(null,"陆俊洁20",0,22,"17623665429@163.com","13111136182");
insert into info values(null,"陆峰6",1,50,"15310077129@163.com","13033352038");
insert into info values(null,"陆春丽6",0,22,"13206123418@163.com","13206133418");
insert into info values(null,"陆俊洁16",0,22,"17623665429@163.com","13117136182");
insert into info values(null,"陆峰7",1,50,"15310077129@163.com","13036359038");
insert into info values(null,"陆春丽7",0,22,"13206123418@163.com","17206123418");
insert into info values(null,"陆俊洁17",0,22,"17623665429@163.com","13117131182");
insert into info values(null,"陆峰8",1,50,"15310077129@163.com","13063359038");
insert into info values(null,"陆春丽8",0,22,"13206123418@163.com","13206723418");
insert into info values(null,"陆俊洁18",0,22,"17623665429@163.com","13111736182");
insert into info values(null,"陆峰9",1,50,"15310077129@163.com","13036353038");
insert into info values(null,"陆春丽9",0,22,"13206123418@163.com","13206723481");
insert into info values(null,"陆俊洁19",0,22,"17623665429@163.com","13110736182");
insert into info values(null,"陆峰10",1,50,"15310077129@163.com","13036354038");
insert into info values(null,"陆春丽10",0,22,"13206123418@163.com","13206623418");
/* foreign key(user) references log_reg(user) */
