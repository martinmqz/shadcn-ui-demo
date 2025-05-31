import TableDemo from "./Tables/table-01"
import BorderedTableDemo from "./Tables/table-02"
import RoundedCornersTableDemo from "./Tables/table-04"
import TableWithPaginationDemo from "./Tables/table-05"
import StickyHeaderTableDemo from "./Tables/table-06"
import StickyColumnsTableDemo from "./Tables/table-07"
import TableOverflowScrollDemo from "./Tables/table-08"
import DataTableDemo from "./Tables/table-09"
import DataTableDensityDemo from "./Tables/table-10"
import DataTableColumnsVisibilityDemo from "./Tables/table-11"

const tables = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><TableDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Bordered</div><BorderedTableDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Striped rows</div><BorderedTableDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Rounded corners</div><RoundedCornersTableDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With pagination</div><TableWithPaginationDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Sticky header</div><StickyHeaderTableDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Sticky columns</div><StickyColumnsTableDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Overflow scroll</div><TableOverflowScrollDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Data Table</div><DataTableDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Data Table Density</div><DataTableDensityDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Columns Visibility</div><DataTableColumnsVisibilityDemo /></div>
]

export default function DemoTables () {
  return (
    <>
      {
        tables.map(table => (
          table
        ))
      }
    </>
  )
}