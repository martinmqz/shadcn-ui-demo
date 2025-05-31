import PaginationDemo from "./Paginations/pagination-01"
import PaginationWithPrimaryButton from "./Paginations/pagination-02"
import PaginationWithSecondaryButton from "./Paginations/pagination-03"
import PaginationWithRoundedButton from "./Paginations/pagination-04"
import PaginationWithIcon from "./Paginations/pagination-05"
import PaginationWithFirstAndLastPageNavigation from "./Paginations/pagination-06"
import PaginationBordered from "./Paginations/pagination-07"
import PaginationTabs from "./Paginations/pagination-08"
import PaginationTabsSecondary from "./Paginations/pagination-09"
import PaginationWithIconAndLabel from "./Paginations/pagination-10"
import PaginationNumberless from "./Paginations/pagination-11"
import PaginationWithEllipsis from "./Paginations/pagination-13"
import TablePagination from "./Paginations/pagination-14"

const paginations = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><PaginationDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Primary Button</div><PaginationWithPrimaryButton /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Secondary Button</div><PaginationWithSecondaryButton /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Rounded Button</div><PaginationWithRoundedButton /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Icon</div><PaginationWithIcon /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">First and Last Page Buttons</div><PaginationWithFirstAndLastPageNavigation /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Bordered</div><PaginationBordered /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Tabs</div><PaginationTabs /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Tabs Secondary</div><PaginationTabsSecondary /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Icon and Label</div><PaginationWithIconAndLabel /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Numberless Pagination</div><PaginationNumberless /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Numberless with Text</div><PaginationNumberless /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With ellipsis</div><PaginationWithEllipsis /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Table Pagination</div><TablePagination /></div>
]

export default function DemoPaginations () {
  return (
    <>
      {
        paginations.map(pagination => (
          pagination
        ))
      }
    </>
  )
}