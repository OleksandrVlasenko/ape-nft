import styled from "@emotion/styled";

const SocialNetworksList = styled.ul`
position: absolute;
top: 0;
right: 16px;

	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const SocialLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 48px;
	height: 48px;

	border-radius: 8px;
	background: var(--secondary-accent-color-transparent);

	backdrop-filter: blur(6px);

	color: var(--secondary-accent-color);

	&:hover {
		color: var(--text-color);
	}
`;

export { SocialNetworksList, SocialLink };