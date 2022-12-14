<x-admin-layout>
    <x-slot name="title">
        {{ __('Clients') }}
    </x-slot>
    <x-slot name="header">
        <h2 class="text-xl font-semibold leading-tight text-gray-800">
            {{ __('Clients') }}
        </h2>
    </x-slot>
    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                <!-- all clients -->
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white dark:bg-darkmode2 sm:px-20 ">
                        <div class="mt-8 text-2xl dark:text-darkmodetext">
                            {{ __('All clients') }}
                        </div>
                        <div class="mt-6 text-gray-500 dark:text-darkmodetext">
                            {{ __('Here you can see all your clients.') }}
                        </div>
                        <div class="flex justify-end mt-4 mr-4">
                            <a href="{{ route('admin.clients.create') }}"
                                class="px-4 py-2 font-bold text-white transition bg-blue-500 rounded delay-400 dark:text-darkmodetext dark:bg-darkbutton dark:hover:bg-logo hover:bg-blue-700">
                                {{ __('Create client') }}
                            </a>
                        </div>
                    </div>
                    <!-- align right a button to create a new client -->
                    <div class="grid grid-cols-1 bg-gray-200 bg-opacity-25 dark:text-darkmodetext dark:bg-darkmode2">
                        <div class="p-6">
                            <div class="flex items-center p-2 rounded-lg dark:bg-darkmode">
                                <div class="w-full ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-darkmodetext"
                                    style="color: white !important;" id="testing">
                                    <table class="w-full divide-y divide-gray-300 dark:text-darkmodetext"
                                        id="clientdatatable">
                                        <thead class="bg-gray-100 dark:bg-darkmode">
                                            <tr>
                                                <th class="px-6 py-2 text-xs text-gray-500 dark:text-darkmodetext">
                                                    {{ __('normal.id') }}
                                                </th>
                                                <th class="px-6 py-2 text-xs text-gray-500 dark:text-darkmodetext">
                                                    {{ __('normal.name') }}
                                                </th>
                                                <th class="px-6 py-2 text-xs text-gray-500 dark:text-darkmodetext">
                                                    {{ __('normal.email') }}
                                                </th>
                                                <th class="px-6 py-2 text-xs text-gray-500 dark:text-darkmodetext">
                                                    {{ __('normal.created_at') }}
                                                </th>
                                                <th class="px-6 py-2 text-xs text-gray-500 dark:text-darkmodetext">
                                                    {{ __('normal.edit') }}
                                                </th>
                                                <th class="px-6 py-2 text-xs text-gray-500 dark:text-darkmodetext">
                                                    {{ __('normal.delete') }}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-500 dark:bg-darkmode">
                                            @foreach ($users as $user)
                                                <tr class="whitespace-nowrap">
                                                    <td
                                                        class="px-6 py-4 text-sm text-center text-gray-500 dark:text-darkmodetext">
                                                        {{ $user->id }}
                                                    </td>
                                                    <td class="px-6 py-4 text-center">
                                                        <div class="text-sm text-gray-900 dark:text-darkmodetext">
                                                            {{ $user->name }}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 text-center">
                                                        <div class="text-sm text-gray-500 dark:text-darkmodetext">
                                                            {{ $user->email }}</div>
                                                    </td>
                                                    <td
                                                        class="px-6 py-4 text-sm text-center text-gray-500 dark:text-darkmodetext">
                                                        {{ $user->created_at }}
                                                    </td>
                                                    <td class="px-6 py-4 text-center">
                                                        <a href="{{ route('admin.clients.edit', $user->id) }}"
                                                            class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">{{ __('normal.edit') }}</a>
                                                    </td>
                                                    <td class="px-6 py-4 text-center">
                                                        <form action="{{ route('admin.clients.delete', $user->id) }}"
                                                            method="POST" class="delete">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit"
                                                                class="px-4 py-1 text-sm text-red-600 bg-red-200 rounded-full">{{ __('normal.delete') }}</button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.12.1/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/r-2.3.0/rr-1.2.8/datatables.min.css" />

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript"
        src="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.12.1/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/r-2.3.0/rr-1.2.8/datatables.min.js">
    </script>
 <style type="text/tailwindcss">
        table.dataTable {
            @apply text-gray-500 dark:text-gray-400 mb-4;
        }

        table.dataTable thead {
            @apply bg-gray-100 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
        }

        table.dataTable thead th {
            @apply font-medium py-3 px-6;
        }

        table.dataTable tbody tr td {
            @apply bg-white border-b dark:bg-gray-800 dark:border-gray-700 py-4 px-6;
        }
        table.dataTable tfoot {
            @apply bg-gray-100 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
        }

        table.dataTable tfoot th {
            @apply font-medium py-3 px-6;
        }

        .dataTables_filter {
            @apply p-2 bg-white dark:bg-gray-900 float-right;
        }

        .dataTables_filter label{
            @apply flex items-center space-x-4 text-gray-900 dark:text-white;
        }

        .dataTables_filter input {
            @apply ml-2 block p-2 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
        }

        .dataTables_info{
            @apply p-2 bg-white dark:bg-gray-900 float-left text-gray-500 dark:text-gray-400;
        }

        .dataTables_paginate {
            @apply p-2 bg-white dark:bg-gray-900 float-right text-gray-500 dark:text-gray-400 pt-3;
        }
        
        .dataTables_paginate span a {
			@apply py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
        }
        
        .dataTables_paginate span a.current {
			@apply z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white;
        }      
        
		.dataTables_paginate .next {
         	@apply py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white; 
		}
        
        .dataTables_paginate .previous {
			@apply py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
		}

        .dataTables_wrapper {
            @apply relative;
        }
        
        body {
        	@apply bg-white dark:bg-gray-900;
		}

    </style>
    <script>
        $(document).ready(function() {
            var table = $('#clientdatatable').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ],
                rowReorder: {
                    selector: 'td:nth-child(2)'
                },
                responsive: true
            });
            $('.dt-button').addClass('dark:text-darkmodetext');
            $('.dataTables_filter label').addClass('dark:text-darkmodetext');
        });

        var form = document.getElementsByClassName('delete');
        var confirmIt = function(e) {
            if (!confirm('Are you sure you want to delete this client?\nThis will remove all data!')) e
                .preventDefault();
        };
        for (var i = 0, l = form.length; i < l; i++) {
            form[i].addEventListener('submit', confirmIt, false);
        }
    </script>
</x-admin-layout>
