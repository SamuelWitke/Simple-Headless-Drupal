import React from 'react';
import ArticleTeaser from './ArticleTeaser.js';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Paper from '@material-ui/core/Paper';
import './ArticlesView.css'


const query = gql`
query{
	nodeQuery(limit:10, offset:0,) {
		count
		entities{
						entityLabel
						entityUrl {
											path
										}
						...on NodeArticle {
						title
						entityCreated
						 fieldImage {
						           url
											         }
						body {
								summary
										value
											}
				}
			}
		}
	}
`;

const ArticlesView = () => {
	return (
			<Query query={query}>
				{({ loading, error, data }) => {
					if (loading) return <div><h1>Loading...</h1></div>;
					if (error) return <div><h1> Error  </h1></div>;
					return data.nodeQuery.entities.map( (article,i)  => (
						<div key={i}>
								<Paper className={"paper"}>
									<ArticleTeaser {...article} />
								</Paper>
						</div>
						))
					}}
				</Query>
		);
};
export default ArticlesView;
