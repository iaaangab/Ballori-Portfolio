import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Educational Background"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./sbca.png"
								alt="sbca"
								className="work-image"
							/>
							<div className="work-title">San Beda College Alabang</div>
							<div className="work-subtitle">
								Senior High School
							</div>
							<div className="work-duration">2018 - 2020</div>
						</div>

						<div className="work">
							<img
								src="./mmcl.png"
								alt="mmcl"
								className="work-image"
							/>
							<div className="work-title">Mapua Malayan Colleges Laguna</div>
							<div className="work-subtitle">
								BS Computer Science
							</div>
							<div className="work-duration">2020 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
