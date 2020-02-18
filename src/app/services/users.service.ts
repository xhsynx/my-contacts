import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { User } from "../model/user";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  Users: User[] = [
    {
      id: 1,
      name: "Janot Brinson",
      phone: "958-535-9482",
      email: "jbrinson0@amazon.co.jp",
      avatar:
        "https://robohash.org/aliquammolestiaemaiores.jpg?size=100x100&set=set1"
    },
    {
      id: 2,
      name: "Eric Wressell",
      phone: "424-129-7655",
      email: "ewressell1@angelfire.com",
      avatar: "https://robohash.org/noncumquesed.png?size=100x100&set=set1"
    },
    {
      id: 3,
      name: "Maud Archbald",
      phone: "595-952-2993",
      email: "marchbald2@opensource.org",
      avatar:
        "https://robohash.org/recusandaeautharum.bmp?size=100x100&set=set1"
    },
    {
      id: 4,
      name: "Pearline Marney",
      phone: "356-797-5615",
      email: "pmarney3@telegraph.co.uk",
      avatar: "https://robohash.org/delectusomnisin.jpg?size=100x100&set=set1"
    },
    {
      id: 5,
      name: "Ferne Sinden",
      phone: "327-414-9988",
      email: "fsinden4@360.cn",
      avatar: "https://robohash.org/nonautemquaerat.bmp?size=100x100&set=set1"
    },
    {
      id: 6,
      name: "Jeremias Juppe",
      phone: "843-957-0343",
      email: "jjuppe5@devhub.com",
      avatar:
        "https://robohash.org/architectoculpavoluptatem.jpg?size=100x100&set=set1"
    },
    {
      id: 7,
      name: "Sarena Kaysor",
      phone: "736-928-5955",
      email: "skaysor6@nba.com",
      avatar:
        "https://robohash.org/veroperferendisminima.png?size=100x100&set=set1"
    },
    {
      id: 8,
      name: "Win De Lorenzo",
      phone: "985-111-4508",
      email: "wde7@google.com.au",
      avatar:
        "https://robohash.org/excepturimagniharum.bmp?size=100x100&set=set1"
    },
    {
      id: 9,
      name: "Kriste Ivoshin",
      phone: "543-844-8886",
      email: "kivoshin8@1688.com",
      avatar:
        "https://robohash.org/velaccusamusplaceat.bmp?size=100x100&set=set1"
    },
    {
      id: 10,
      name: "Janna Plaice",
      phone: "792-787-2861",
      email: "jplaice9@uiuc.edu",
      avatar: "https://robohash.org/deseruntquasminus.png?size=100x100&set=set1"
    },
    {
      id: 11,
      name: "Allie Cristofvao",
      phone: "751-490-6456",
      email: "acristofvaoa@pbs.org",
      avatar: "https://robohash.org/sitrerumet.jpg?size=100x100&set=set1"
    },
    {
      id: 12,
      name: "Sollie Kindall",
      phone: "287-255-7031",
      email: "skindallb@ask.com",
      avatar: "https://robohash.org/autemautcorrupti.bmp?size=100x100&set=set1"
    },
    {
      id: 13,
      name: "Theressa Celand",
      phone: "685-307-7188",
      email: "tcelandc@hexun.com",
      avatar:
        "https://robohash.org/enimadipisciquaerat.png?size=100x100&set=set1"
    },
    {
      id: 14,
      name: "Odille Freda",
      phone: "430-853-8938",
      email: "ofredad@dmoz.org",
      avatar:
        "https://robohash.org/voluptatemmagnamsint.bmp?size=100x100&set=set1"
    },
    {
      id: 15,
      name: "Clerkclaude Castiello",
      phone: "272-601-1754",
      email: "ccastielloe@upenn.edu",
      avatar: "https://robohash.org/temporanobisest.jpg?size=100x100&set=set1"
    },
    {
      id: 16,
      name: "Raddie Ralestone",
      phone: "387-616-4393",
      email: "rralestonef@cpanel.net",
      avatar:
        "https://robohash.org/corporisreiciendisnon.jpg?size=100x100&set=set1"
    },
    {
      id: 17,
      name: "Merrill Milbank",
      phone: "215-849-1549",
      email: "mmilbankg@walmart.com",
      avatar:
        "https://robohash.org/rationesedvoluptatem.bmp?size=100x100&set=set1"
    },
    {
      id: 18,
      name: "Pip Wedderburn",
      phone: "731-894-0409",
      email: "pwedderburnh@cyberchimps.com",
      avatar:
        "https://robohash.org/rerumveritatisconsectetur.bmp?size=100x100&set=set1"
    },
    {
      id: 19,
      name: "Dorena Sherborn",
      phone: "258-131-5420",
      email: "dsherborni@mediafire.com",
      avatar:
        "https://robohash.org/quiadoloremqueullam.bmp?size=100x100&set=set1"
    },
    {
      id: 20,
      name: "Augy Spoors",
      phone: "691-945-1780",
      email: "aspoorsj@wix.com",
      avatar:
        "https://robohash.org/nesciuntmaioresdoloribus.png?size=100x100&set=set1"
    },
    {
      id: 21,
      name: "Garrard Wilcox",
      phone: "281-905-4542",
      email: "gwilcoxk@hhs.gov",
      avatar: "https://robohash.org/velitdoloramet.bmp?size=100x100&set=set1"
    },
    {
      id: 22,
      name: "Hermia Gooddie",
      phone: "534-263-1708",
      email: "hgooddiel@hibu.com",
      avatar: "https://robohash.org/explicaboquout.png?size=100x100&set=set1"
    },
    {
      id: 23,
      name: "Leonardo Yurygyn",
      phone: "248-736-1331",
      email: "lyurygynm@clickbank.net",
      avatar:
        "https://robohash.org/sitsequiconsequatur.jpg?size=100x100&set=set1"
    },
    {
      id: 24,
      name: "Martainn Paske",
      phone: "275-523-9709",
      email: "mpasken@admin.ch",
      avatar: "https://robohash.org/eiusipsamamet.jpg?size=100x100&set=set1"
    },
    {
      id: 25,
      name: "Sherye Meynell",
      phone: "582-599-7708",
      email: "smeynello@behance.net",
      avatar: "https://robohash.org/utestodio.bmp?size=100x100&set=set1"
    },
    {
      id: 26,
      name: "Jed Cosh",
      phone: "757-997-4007",
      email: "jcoshp@diigo.com",
      avatar: "https://robohash.org/sitexpeditaest.jpg?size=100x100&set=set1"
    },
    {
      id: 27,
      name: "Pascale Cakebread",
      phone: "148-382-8991",
      email: "pcakebreadq@oracle.com",
      avatar: "https://robohash.org/estadipisciaut.bmp?size=100x100&set=set1"
    },
    {
      id: 28,
      name: "Estelle Rosettini",
      phone: "638-887-1274",
      email: "erosettinir@jimdo.com",
      avatar:
        "https://robohash.org/nesciuntcorporisdeserunt.png?size=100x100&set=set1"
    },
    {
      id: 29,
      name: "Rica Easlea",
      phone: "887-855-5822",
      email: "reasleas@sitemeter.com",
      avatar:
        "https://robohash.org/repellendusliberoillum.bmp?size=100x100&set=set1"
    },
    {
      id: 30,
      name: "Maddy Fillimore",
      phone: "197-848-6843",
      email: "mfillimoret@foxnews.com",
      avatar: "https://robohash.org/velitveniamut.bmp?size=100x100&set=set1"
    },
    {
      id: 31,
      name: "Fina Wolfendell",
      phone: "618-437-4663",
      email: "fwolfendellu@slate.com",
      avatar:
        "https://robohash.org/nobisfugiatconsequuntur.jpg?size=100x100&set=set1"
    },
    {
      id: 32,
      name: "Welby O'Heneghan",
      phone: "460-262-9560",
      email: "woheneghanv@state.tx.us",
      avatar:
        "https://robohash.org/consequunturrepudiandaeodit.png?size=100x100&set=set1"
    },
    {
      id: 33,
      name: "Aggy Milstead",
      phone: "899-933-6398",
      email: "amilsteadw@vistaprint.com",
      avatar:
        "https://robohash.org/quirepellatquisquam.png?size=100x100&set=set1"
    },
    {
      id: 34,
      name: "Claresta Pedrocco",
      phone: "104-653-4970",
      email: "cpedroccox@msu.edu",
      avatar: "https://robohash.org/etisteest.png?size=100x100&set=set1"
    },
    {
      id: 35,
      name: "Ax Lloyd",
      phone: "480-535-6465",
      email: "alloydy@friendfeed.com",
      avatar:
        "https://robohash.org/quivoluptatemincidunt.jpg?size=100x100&set=set1"
    },
    {
      id: 36,
      name: "Adrianna Baison",
      phone: "502-902-7095",
      email: "abaisonz@vkontakte.ru",
      avatar: "https://robohash.org/nihildoloremut.jpg?size=100x100&set=set1"
    },
    {
      id: 37,
      name: "Wash Treamayne",
      phone: "430-398-4561",
      email: "wtreamayne10@1und1.de",
      avatar: "https://robohash.org/quisinciduntet.jpg?size=100x100&set=set1"
    },
    {
      id: 38,
      name: "Erin Hutchins",
      phone: "378-184-5783",
      email: "ehutchins11@slashdot.org",
      avatar: "https://robohash.org/sintquosanimi.jpg?size=100x100&set=set1"
    },
    {
      id: 39,
      name: "Cart Lapthorne",
      phone: "883-905-5918",
      email: "clapthorne12@weather.com",
      avatar: "https://robohash.org/quiadoloreratione.bmp?size=100x100&set=set1"
    },
    {
      id: 40,
      name: "Olvan Sainer",
      phone: "528-337-3060",
      email: "osainer13@ezinearticles.com",
      avatar:
        "https://robohash.org/aspernaturcorruptirerum.bmp?size=100x100&set=set1"
    },
    {
      id: 41,
      name: "Madel Gamble",
      phone: "236-363-2171",
      email: "mgamble14@ftc.gov",
      avatar:
        "https://robohash.org/sintbeataerepudiandae.png?size=100x100&set=set1"
    },
    {
      id: 42,
      name: "Kiersten Hebble",
      phone: "249-640-6552",
      email: "khebble15@soup.io",
      avatar: "https://robohash.org/rationequasnam.bmp?size=100x100&set=set1"
    },
    {
      id: 43,
      name: "Bryan Giovanardi",
      phone: "943-133-3195",
      email: "bgiovanardi16@amazon.com",
      avatar: "https://robohash.org/totammodiculpa.jpg?size=100x100&set=set1"
    },
    {
      id: 44,
      name: "Conney MacLaren",
      phone: "993-115-4641",
      email: "cmaclaren17@webnode.com",
      avatar:
        "https://robohash.org/eaarchitectoplaceat.png?size=100x100&set=set1"
    },
    {
      id: 45,
      name: "Olive Imloch",
      phone: "188-909-8927",
      email: "oimloch18@themeforest.net",
      avatar:
        "https://robohash.org/blanditiisestmagnam.jpg?size=100x100&set=set1"
    },
    {
      id: 46,
      name: "Alexa Menere",
      phone: "775-440-9671",
      email: "amenere19@chron.com",
      avatar: "https://robohash.org/aeapraesentium.jpg?size=100x100&set=set1"
    },
    {
      id: 47,
      name: "Damita Monelli",
      phone: "509-435-1084",
      email: "dmonelli1a@qq.com",
      avatar:
        "https://robohash.org/voluptatumdolorescum.bmp?size=100x100&set=set1"
    },
    {
      id: 48,
      name: "Nehemiah Eteen",
      phone: "782-740-9299",
      email: "neteen1b@princeton.edu",
      avatar:
        "https://robohash.org/undedistinctioasperiores.bmp?size=100x100&set=set1"
    },
    {
      id: 49,
      name: "Brennan Meneghi",
      phone: "978-519-8216",
      email: "bmeneghi1c@hubpages.com",
      avatar: "https://robohash.org/essequiaccusamus.bmp?size=100x100&set=set1"
    },
    {
      id: 50,
      name: "Melvyn Jolley",
      phone: "267-367-4407",
      email: "mjolley1d@reuters.com",
      avatar:
        "https://robohash.org/similiquevoluptatibusdolores.bmp?size=100x100&set=set1"
    },
    {
      id: 51,
      name: "Sukey Kitchenside",
      phone: "749-556-7952",
      email: "skitchenside1e@google.es",
      avatar:
        "https://robohash.org/illumquibusdamconsequuntur.jpg?size=100x100&set=set1"
    },
    {
      id: 52,
      name: "Martin Fallens",
      phone: "268-371-3915",
      email: "mfallens1f@smugmug.com",
      avatar:
        "https://robohash.org/explicabosedlaudantium.bmp?size=100x100&set=set1"
    },
    {
      id: 53,
      name: "Caleb Apark",
      phone: "417-358-2121",
      email: "capark1g@cloudflare.com",
      avatar:
        "https://robohash.org/nisidoloremnumquam.png?size=100x100&set=set1"
    },
    {
      id: 54,
      name: "Franky Duffil",
      phone: "784-200-4848",
      email: "fduffil1h@mit.edu",
      avatar:
        "https://robohash.org/autprovidentlaborum.jpg?size=100x100&set=set1"
    },
    {
      id: 55,
      name: "Townie Pilcher",
      phone: "304-401-6629",
      email: "tpilcher1i@yellowbook.com",
      avatar:
        "https://robohash.org/adipisciquiexplicabo.png?size=100x100&set=set1"
    },
    {
      id: 56,
      name: "Benetta Sessions",
      phone: "497-670-1219",
      email: "bsessions1j@cisco.com",
      avatar:
        "https://robohash.org/corporisinventorerecusandae.bmp?size=100x100&set=set1"
    },
    {
      id: 57,
      name: "Theresina Davana",
      phone: "627-156-4439",
      email: "tdavana1k@tinyurl.com",
      avatar: "https://robohash.org/siteosest.jpg?size=100x100&set=set1"
    },
    {
      id: 58,
      name: "Johanna La Vigne",
      phone: "448-356-9837",
      email: "jla1l@gmpg.org",
      avatar:
        "https://robohash.org/ipsamnumquamsoluta.jpg?size=100x100&set=set1"
    },
    {
      id: 59,
      name: "Tyson Soigoux",
      phone: "713-148-9112",
      email: "tsoigoux1m@istockphoto.com",
      avatar:
        "https://robohash.org/voluptatemquaeplaceat.bmp?size=100x100&set=set1"
    },
    {
      id: 60,
      name: "Halley Kerin",
      phone: "911-686-0835",
      email: "hkerin1n@omniture.com",
      avatar: "https://robohash.org/etvelquos.jpg?size=100x100&set=set1"
    },
    {
      id: 61,
      name: "Brinn Trevains",
      phone: "813-694-5967",
      email: "btrevains1o@patch.com",
      avatar:
        "https://robohash.org/voluptatibusatnemo.jpg?size=100x100&set=set1"
    },
    {
      id: 62,
      name: "Mareah Fowls",
      phone: "182-966-3788",
      email: "mfowls1p@symantec.com",
      avatar:
        "https://robohash.org/quasipsumaccusantium.jpg?size=100x100&set=set1"
    },
    {
      id: 63,
      name: "Stoddard Northwood",
      phone: "365-573-4259",
      email: "snorthwood1q@mysql.com",
      avatar:
        "https://robohash.org/odioblanditiisaccusantium.bmp?size=100x100&set=set1"
    },
    {
      id: 64,
      name: "Burg Matelyunas",
      phone: "537-721-8854",
      email: "bmatelyunas1r@quantcast.com",
      avatar:
        "https://robohash.org/doloremtemporibusin.png?size=100x100&set=set1"
    },
    {
      id: 65,
      name: "Abe Caress",
      phone: "233-195-3575",
      email: "acaress1s@uol.com.br",
      avatar:
        "https://robohash.org/sintsedaccusantium.bmp?size=100x100&set=set1"
    },
    {
      id: 66,
      name: "Elene Truce",
      phone: "234-289-2821",
      email: "etruce1t@networksolutions.com",
      avatar: "https://robohash.org/iustomaioresquia.bmp?size=100x100&set=set1"
    },
    {
      id: 67,
      name: "Glynnis Mayhew",
      phone: "515-921-1466",
      email: "gmayhew1u@behance.net",
      avatar:
        "https://robohash.org/voluptatemrepellendusnam.jpg?size=100x100&set=set1"
    },
    {
      id: 68,
      name: "Lexis Toffanelli",
      phone: "956-824-2392",
      email: "ltoffanelli1v@bing.com",
      avatar:
        "https://robohash.org/aspernaturquasrecusandae.jpg?size=100x100&set=set1"
    },
    {
      id: 69,
      name: "Kalil Simla",
      phone: "969-582-0274",
      email: "ksimla1w@salon.com",
      avatar: "https://robohash.org/porroquimaxime.bmp?size=100x100&set=set1"
    },
    {
      id: 70,
      name: "Sven Kippling",
      phone: "934-585-8169",
      email: "skippling1x@edublogs.org",
      avatar: "https://robohash.org/sedmolestiasab.bmp?size=100x100&set=set1"
    },
    {
      id: 71,
      name: "Nancey Matson",
      phone: "615-589-2287",
      email: "nmatson1y@constantcontact.com",
      avatar:
        "https://robohash.org/deseruntprovidentassumenda.png?size=100x100&set=set1"
    },
    {
      id: 72,
      name: "Adler MacRury",
      phone: "384-693-0605",
      email: "amacrury1z@biglobe.ne.jp",
      avatar:
        "https://robohash.org/enimdelectusoccaecati.bmp?size=100x100&set=set1"
    },
    {
      id: 73,
      name: "Melesa Copcutt",
      phone: "397-938-9608",
      email: "mcopcutt20@cyberchimps.com",
      avatar:
        "https://robohash.org/nulladeseruntomnis.bmp?size=100x100&set=set1"
    },
    {
      id: 74,
      name: "Edythe Poulsom",
      phone: "261-295-4134",
      email: "epoulsom21@imageshack.us",
      avatar: "https://robohash.org/etindolorem.jpg?size=100x100&set=set1"
    },
    {
      id: 75,
      name: "Annabell Dufoure",
      phone: "369-885-2296",
      email: "adufoure22@omniture.com",
      avatar: "https://robohash.org/quofugiatin.png?size=100x100&set=set1"
    },
    {
      id: 76,
      name: "Elga Tripean",
      phone: "341-101-5701",
      email: "etripean23@blogspot.com",
      avatar: "https://robohash.org/cumquequivoluptas.jpg?size=100x100&set=set1"
    },
    {
      id: 77,
      name: "Bebe Yellep",
      phone: "960-153-4557",
      email: "byellep24@amazonaws.com",
      avatar:
        "https://robohash.org/autemaspernaturneque.png?size=100x100&set=set1"
    },
    {
      id: 78,
      name: "Ab Hambers",
      phone: "277-690-0301",
      email: "ahambers25@ocn.ne.jp",
      avatar: "https://robohash.org/suscipitutcum.bmp?size=100x100&set=set1"
    },
    {
      id: 79,
      name: "Thurstan Cordle",
      phone: "243-125-1425",
      email: "tcordle26@cmu.edu",
      avatar:
        "https://robohash.org/voluptatemcommodireprehenderit.jpg?size=100x100&set=set1"
    },
    {
      id: 80,
      name: "Lulu Croucher",
      phone: "996-872-9254",
      email: "lcroucher27@hc360.com",
      avatar: "https://robohash.org/eumutaut.bmp?size=100x100&set=set1"
    },
    {
      id: 81,
      name: "Jacquelyn McPhillips",
      phone: "906-456-9720",
      email: "jmcphillips28@e-recht24.de",
      avatar: "https://robohash.org/repellattotamquas.png?size=100x100&set=set1"
    },
    {
      id: 82,
      name: "Latashia Basillon",
      phone: "254-554-9021",
      email: "lbasillon29@storify.com",
      avatar: "https://robohash.org/nostrumofficiasit.png?size=100x100&set=set1"
    },
    {
      id: 83,
      name: "Kellie Leatherland",
      phone: "328-177-9931",
      email: "kleatherland2a@businessweek.com",
      avatar:
        "https://robohash.org/dictalaboriosamrepellendus.bmp?size=100x100&set=set1"
    },
    {
      id: 84,
      name: "Patrica Ramsbottom",
      phone: "473-825-6007",
      email: "pramsbottom2b@hubpages.com",
      avatar: "https://robohash.org/quaenemodolore.png?size=100x100&set=set1"
    },
    {
      id: 85,
      name: "Bar Clotworthy",
      phone: "813-676-7284",
      email: "bclotworthy2c@ovh.net",
      avatar:
        "https://robohash.org/autaccusamusplaceat.png?size=100x100&set=set1"
    },
    {
      id: 86,
      name: "Erhard Cloney",
      phone: "572-489-0000",
      email: "ecloney2d@ehow.com",
      avatar: "https://robohash.org/utlaborumdeserunt.bmp?size=100x100&set=set1"
    },
    {
      id: 87,
      name: "Chastity Cranfield",
      phone: "528-458-5526",
      email: "ccranfield2e@yahoo.co.jp",
      avatar: "https://robohash.org/fugiataarchitecto.png?size=100x100&set=set1"
    },
    {
      id: 88,
      name: "Caz Davidsohn",
      phone: "727-278-3196",
      email: "cdavidsohn2f@google.nl",
      avatar: "https://robohash.org/deseruntestfugit.bmp?size=100x100&set=set1"
    },
    {
      id: 89,
      name: "Curry Grece",
      phone: "497-669-1823",
      email: "cgrece2g@wufoo.com",
      avatar: "https://robohash.org/earumquonihil.bmp?size=100x100&set=set1"
    },
    {
      id: 90,
      name: "Clarisse Decreuze",
      phone: "276-413-8050",
      email: "cdecreuze2h@yahoo.co.jp",
      avatar:
        "https://robohash.org/quidemipsumvoluptas.png?size=100x100&set=set1"
    },
    {
      id: 91,
      name: "Maxie Drohun",
      phone: "286-585-1504",
      email: "mdrohun2i@hp.com",
      avatar: "https://robohash.org/etremsuscipit.jpg?size=100x100&set=set1"
    },
    {
      id: 92,
      name: "Amanda Stieger",
      phone: "714-348-5663",
      email: "astieger2j@nifty.com",
      avatar:
        "https://robohash.org/maioreslaudantiumvoluptatem.png?size=100x100&set=set1"
    },
    {
      id: 93,
      name: "Gearalt Inchcomb",
      phone: "899-710-6112",
      email: "ginchcomb2k@zdnet.com",
      avatar:
        "https://robohash.org/eavoluptatelaborum.bmp?size=100x100&set=set1"
    },
    {
      id: 94,
      name: "Norby Okeshott",
      phone: "619-207-6842",
      email: "nokeshott2l@csmonitor.com",
      avatar:
        "https://robohash.org/excepturifugitodio.png?size=100x100&set=set1"
    },
    {
      id: 95,
      name: "Ellerey Snufflebottom",
      phone: "936-582-2846",
      email: "esnufflebottom2m@meetup.com",
      avatar:
        "https://robohash.org/illumminimaquaerat.jpg?size=100x100&set=set1"
    },
    {
      id: 96,
      name: "Liv Mulgrew",
      phone: "946-492-6411",
      email: "lmulgrew2n@nba.com",
      avatar: "https://robohash.org/quoutnon.png?size=100x100&set=set1"
    },
    {
      id: 97,
      name: "Gay Schutte",
      phone: "637-518-6121",
      email: "gschutte2o@pen.io",
      avatar:
        "https://robohash.org/perspiciatisrerumpossimus.bmp?size=100x100&set=set1"
    },
    {
      id: 98,
      name: "Fionnula Tapner",
      phone: "341-699-3973",
      email: "ftapner2p@facebook.com",
      avatar: "https://robohash.org/exquamporro.bmp?size=100x100&set=set1"
    },
    {
      id: 99,
      name: "Chance Mularkey",
      phone: "306-802-2143",
      email: "cmularkey2q@google.it",
      avatar: "https://robohash.org/autquinostrum.bmp?size=100x100&set=set1"
    },
    {
      id: 100,
      name: "Bink Sherewood",
      phone: "366-745-0106",
      email: "bsherewood2r@un.org",
      avatar: "https://robohash.org/autaperiamest.png?size=100x100&set=set1"
    }
  ];
  constructor() {}

  get() {
    return of(this.Users);
  }
}
