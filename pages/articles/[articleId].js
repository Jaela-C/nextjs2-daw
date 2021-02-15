import React from 'react';

const ArticleDetails = ( {article} ) => {
    return (
        <div>
            {article.error}
        </div>
    );
};

export default ArticleDetails;

export async function getStaticProps(context) {

    console.log( 'context', context )
    const {articleId} = context.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${articleId}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          article: data
      }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { articleId: '1' } },
            { params: { articleId: '2' } }
          ],
      fallback: false // See the "fallback" section below
    };
}