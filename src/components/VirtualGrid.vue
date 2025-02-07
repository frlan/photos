
<template>
	<Grid ref="grid">
		<!-- top spacer -->
		<span v-show="shownFirstRow > 0"
			key="filler-top"
			ref="filler-top"
			:style="{paddingBottom: topPadding}"
			class="grid-filler grid-filler--top"
			role="none" />

		<!-- files list -->
		<component :is="component(item)"
			v-for="(item, index) in shownList"
			:key="item.fileid"
			:ref="`item-${index}`"
			:class="`row-${getRowNumber(index)}`"
			:list="list"
			v-bind="props(item)" />

		<!-- next page loading indicator -->
		<div v-if="loadingPage"
			key="grid-loading"
			class="grid-loading icon-loading"
			role="none" />

		<!-- bottom spacer -->
		<span v-show="shownLastRow < lastRow"
			ref="filler-bottom"
			key="filler-bottom"
			:style="{paddingBottom: bottomPadding}"
			class="grid-filler grid-filler--bottom"
			role="none" />
	</Grid>
</template>

<script>
import { requestTimeout, clearRequestTimeout } from '@essentials/request-timeout'
import Grid from './Grid'
import GridConfigMixin from '../mixins/GridConfig'

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
export const DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150

export default {
	name: 'VirtualGrid',
	components: {
		Grid,
	},
	mixins: [GridConfigMixin],

	props: {
		list: {
			type: Array,
			default: () => ([]),
		},
		props: {
			type: Function,
			default: () => ({}),
		},
		component: {
			type: Function,
			required: true,
		},
		loadingPage: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			shownFirstRow: 0,
			shownLastRow: this.getRowNumber(this.list.length - 1),
		}
	},

	computed: {

		shownList() {
			return this.list.filter((item, index) => this.isVisible(index))
		},

		/**
		 * Calculate the top filler needed padding
		 * to compensate for the hidden items
		 * @returns {string}
		 */
		topPadding() {
			return `${this.shownFirstRow * 100}%`
		},
		/**
		 * Calculate the bottom filler needed padding
		 * to compensate for the hidden items
		 * Because bottomShift indicate the index of the last visible item,
		 * we need to calcuta ehow any rows there is to compensate
		 * between bottomShift and the end of the list
		 * @returns {string}
		 */
		bottomPadding() {
			return `${(this.lastRow - this.shownLastRow) * 100}%`
		},

		lastRow() {
			return this.getRowNumber(this.list.length - 1)
		},
	},

	created() {
		window.addEventListener('resize', this.onDocumentScroll)
		window.addEventListener('scroll', this.onDocumentScroll)
	},
	mounted() {
		this.onDocumentScroll()
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onDocumentScroll)
		window.removeEventListener('scroll', this.onDocumentScroll)
	},

	methods: {

		/**
		 * Request an animation frame and debounce the onScroll method
		 */
		debounceOnDocumentScroll() {
			if (this.debounceOnDocumentScrollRequest) {
				clearRequestTimeout(this.debounceOnDocumentScrollRequest)
			}

			this.debounceOnDocumentScrollRequest = requestTimeout(
				this.onDocumentScroll,
				DEFAULT_SCROLLING_RESET_TIME_INTERVAL, //
			)
		},

		/**
		 * Handle document scroll
		 * Detect first visible/hidden to implement virtual scrolling
		 */
		onDocumentScroll() {

			// get the row height
			const gridContainer = this.$refs.grid.$el
			const gridStyles = getComputedStyle(gridContainer)
			const rowHeight = parseFloat(gridStyles.gridTemplateColumns.split(' ')[0], 10)

			// scrolled content
			// rounding up to tens to make sure we only detect changes by steps of 10px
			const scrolled = this.roundToTen(window.pageYOffset - this.gridConfig.marginTop)

			// adding one above and one under to have a trigger area of one row
			const shownFirstRow = Math.floor(scrolled / (rowHeight + this.gridConfig.gap)) - 1
			const shownLastRow = Math.ceil(window.innerHeight / rowHeight) + shownFirstRow + 1

			this.shownFirstRow = Math.max(shownFirstRow, 0) // the first shown row cannot be negative
			this.shownLastRow = Math.min(shownLastRow, this.lastRow) // the last shown row cannot be lower than the last row

			if (this.shownLastRow >= this.lastRow) {
				this.$emit('bottomReached')
			}

		},

		isVisible(index) {
			const row = this.getRowNumber(index)
			return row >= this.shownFirstRow && row < this.shownLastRow + 1
		},

		/**
		 * Return the row number of the provided index
		 *
		 * @param {number} index the index
		 * @returns {number}
		 */
		getRowNumber(index) {
			// in case the grid config is not here yet, let's
			const count = this.gridConfig ? this.gridConfig.count : this.list.length
			return Math.floor(index / count)
		},

		/**
		 * Round the provided number to a tens of its value
		 *
		 * @param {number} number the number to round
		 * @returns {number}
		 */
		roundToTen(number) {
			return Math.floor(number / 10) * 10
		},
	},
}
</script>

<style lang="scss" scoped>
.grid-filler {
	// put the filler at the end of the row to put the next one into a new line
	grid-column-end: -1;
}

.grid-loading {
	grid-column: 1/-1;
	height: 88px;
}
</style>
