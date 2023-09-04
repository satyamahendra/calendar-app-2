import React from "react";

import countPercentage from "../../../utils/countPercentage";

import { PiCircleDashedLight } from "react-icons/pi";

const ActivitiesToDateCard = ({
	activitiesToDateExist,
	activitiesToDate,
	activitiesToDateCount,
	isLoading,
}) => {
	const activitiesDoneToDateCount = activitiesToDate.filter(
		(activity) => activity.isDone === true
	).length;

	const activitiesDonePercentage = activitiesToDateExist
		? countPercentage(activitiesDoneToDateCount, activitiesToDateCount)
		: 0;

	return (
		<li className="flex flex-col items-center justify-between flex-shrink-0 h-24 p-2 bg-gray-800 w-36 rounded-xl ">
			<h2>Activities to date</h2>
			<span className="text-xl">
				{isLoading.fetching ? (
					<PiCircleDashedLight className="animate-spin" />
				) : (
					activitiesToDateCount
				)}
			</span>
			<h3>{activitiesDonePercentage}% completed</h3>
		</li>
	);
};

export default ActivitiesToDateCard;