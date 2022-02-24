import classNames from "classnames";
import React, { FC } from "react";

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";
type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
	variant: BadgeVariant;
	size?: BadgeSize;
	children: string | React.ReactElement;
	className?: string;
	LeadingIcon?: React.ReactElement;
	TrailingIcon?: React.ReactElement;
}

const BadgeVariantClasses: Record<BadgeVariant, string> = {
	gray: "badge-gray",
	primary: "badge-primary",
	error: "badge-error",
	warning: "badge-warning",
	success: "badge-success"
};

const BadgeSizeClasses: Record<BadgeSize, string> = {
	sm: "badge-sm",
	md: "badge-md",
	lg: "badge-lg"
};

export const Badge: FC<BadgeProps> = ({ variant, size = "md", LeadingIcon, TrailingIcon, className, children }) => {
	const BadgeVariantClassName = BadgeVariantClasses[variant];
	const BadgeSizeclassName = BadgeSizeClasses[size];

	return (
		<div className={classNames("badge-base", BadgeVariantClassName, BadgeSizeclassName, className)}>
			{LeadingIcon ? (
				<LeadingIcon.type {...LeadingIcon.props} className={classNames("mr-1.5", LeadingIcon.props.className)} />
			) : null}
			{children}
			{TrailingIcon ? (
				<TrailingIcon.type {...TrailingIcon.type} className={classNames("ml-1.5", TrailingIcon.props.className)} />
			) : null}
		</div>
	)
}