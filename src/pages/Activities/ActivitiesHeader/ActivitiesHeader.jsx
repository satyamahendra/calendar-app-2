import { format, isSameDay, parseISO } from "date-fns";
import React, { useContext } from "react";

import ActivitiesToDateCard from "./ActivitiesToDateCard";

import DateContext from "../../../context/DateContext";
import ActivitiesContext from "../../../context/ActivitiesContext";

import PriorityActivitiesCard from "./PriorityActivitiesCard";

const ActivitiesHeader = () => {
	const { selectedDate } = useContext(DateContext);
	const { activities, isActivitiesExist, isLoading } =
		useContext(ActivitiesContext);

	const activitiesToDate = isActivitiesExist
		? activities.filter((activity) =>
				isSameDay(parseISO(activity.date, selectedDate), selectedDate)
		  )
		: [];

	const activitiesToDateExist = activitiesToDate.length > 0;
	const activitiesToDateCount = activitiesToDate.length;

	return (
		<section className="bg-white rounded-b-2xl sm:rounded-2xl">
			<div className="p-4">
				<h1 className="text-2xl">Good morning</h1>

				<span className="text-sm">
					{format(selectedDate, "eeee, d MMMM yyyy")}
				</span>
			</div>

			<ul className="flex gap-2 p-2 overflow-auto text-sm text-gray-100 sm:flex-col">
				<ActivitiesToDateCard
					activitiesToDateExist={activitiesToDateExist}
					activitiesToDate={activitiesToDate}
					activitiesToDateCount={activitiesToDateCount}
					isLoading={isLoading}
				/>
				<PriorityActivitiesCard
					priority="high"
					backgroundColor="bg-gray-700"
					iconColor="text-red-400"
					activitiesToDateExist={activitiesToDateExist}
					activitiesToDate={activitiesToDate}
					isLoading={isLoading}
				/>
				<PriorityActivitiesCard
					priority="normal"
					backgroundColor="bg-gray-600"
					iconColor="text-green-400"
					activitiesToDateExist={activitiesToDateExist}
					activitiesToDate={activitiesToDate}
					isLoading={isLoading}
				/>
				<PriorityActivitiesCard
					priority="low"
					backgroundColor="bg-gray-500"
					iconColor="text-blue-400"
					activitiesToDateExist={activitiesToDateExist}
					activitiesToDate={activitiesToDate}
					isLoading={isLoading}
				/>
			</ul>
		</section>
	);
};

export default ActivitiesHeader;
