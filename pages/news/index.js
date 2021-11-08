import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/news-item-1">News Item 1
                    </Link>
                </li>
                <li>News Item 2</li>
                <li>News Item 3</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;