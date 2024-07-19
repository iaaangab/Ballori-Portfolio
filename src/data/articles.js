import React from "react";

function article_1() {
	return {
		date: "July 2024",
		title: "Final Report",
		description:
			"A complete narrative report about being an intern web developer at Cloudlex Software Solutions. A summary of my experience working at the company and learnings throughout my journey ",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Final Report</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "July 2024",
		title: "Curriculum Vitae",
		description:
			"This CV outlines my academic excellence as a computer science student at Mapúa Malayan Colleges Laguna and my hands-on experience in software development. It highlights my proficiency in multiple programming languages, technical documentation, and various projects.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<a href={"../Ballori_Resume.pdf"} target="_blank" rel="noopener noreferrer">
                    Ian Gabriel Ballori Resume
                </a>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
