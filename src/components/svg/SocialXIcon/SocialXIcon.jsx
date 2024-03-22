import PropTypes from "prop-types";

const SocialXIcon = ({ width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M14.2833 10.1571L23.2178 0H21.1006L13.3427 8.81931L7.14656 0H0L9.36984 13.3364L0 23.9877H2.11732L10.3098 14.6742L16.8534 23.9877H24L14.2827 10.1571H14.2833ZM11.3833 13.4538L10.4339 12.1258L2.88022 1.55881H6.1323L12.2282 10.0867L13.1776 11.4147L21.1016 22.4998H17.8495L11.3833 13.4544V13.4538Z" />
		</svg>
	);
};

SocialXIcon.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export { SocialXIcon };
