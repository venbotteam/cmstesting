import axios from "axios";

const ARTICLES = [
    {
        id: '',
        author: 'admin',
        coverImg: '@/assets/img.png',
        categories: ["High Performance"],
        date: '9 January 2021',
        title: 'Consulted admitting is power acuteness.',
        content: `Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.

New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

> Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend devonshire dispatched.

Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

## Conduct replied off whether arrived adapted
- Pretty merits waited six
- Pretty merits waited six
- Pretty merits waited six
- Pretty merits waited six

[http://www.facebook.com](http://www.facebook.com)
`
    },
    {
        id: '',
        author: 'admin',
        coverImg: '@/assets/img_1.png',
        categories: ["Health"],
        date: '9 January 2021',
        title: 'Unsatiable entreaties may collecting Power.',
        content: `Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.

New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

> Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend devonshire dispatched.

Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

## Conduct replied off whether arrived adapted
- Pretty merits waited six
- Pretty merits waited six
- Pretty merits waited six
- Pretty merits waited six

[http://www.facebook.com](http://www.facebook.com)
`
    },
    {
        id: '',
        author: 'admin',
        coverImg: '@/assets/img_2.png',
        categories: ["Nation", "Sports"],
        date: '9 January 2021',
        title: 'Discovery incommode earnestly command',
        content: `Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.

New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

> Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend devonshire dispatched.

Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

## Conduct replied off whether arrived adapted
- Pretty merits waited six
- Pretty merits waited six
- Pretty merits waited six
- Pretty merits waited six

[http://www.facebook.com](http://www.facebook.com)
`
    },
    {
        id: '',
        author: 'admin',
        coverImg: '@/assets/img_3.png',
        categories: ["High Performance"],
        date: '9 January 2021',
        title: 'Participate in staff meetingness manage',
        content: `Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.

New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

> Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend devonshire dispatched.

Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.

## Conduct replied off whether arrived adapted
- Pretty merits waited six
- Pretty merits waited six
- Pretty merits waited six
- Pretty merits waited six

[http://www.facebook.com](http://www.facebook.com)
`
    }
]


export const Articles = {
    async getArticleList() {
        let res = await axios.get('http://localhost:1337/articles')
        return res.data
    },
    async getArticle(id) {
        let res = await axios.get(`http://localhost:1337/articles/${id}`)
        return res.data
    }
}