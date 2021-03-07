import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import {
	space,
	layout,
	color,
	flexbox,
	border,
	shadow,
	position,
	background,
	grid,
} from 'styled-system';

const Row = styled.div(
	{
		display: 'flex',
	},
	flexbox,
	space,
	layout,
	color,
	border,
	shadow,
	position,
	background,
	grid
);

const Column = styled(Row)`
	flex-direction: column;
`;

Row.propTypes = {
	...propTypes.space,
	...propTypes.layout,
	...propTypes.color,
	...propTypes.flexbox,
	...propTypes.border,
	...propTypes.shadow,
	...propTypes.position,
	...propTypes.background,
	...propTypes.grid,
};

export { Row, Column };