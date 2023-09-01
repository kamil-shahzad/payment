export const MenuList = [
    //Dashboard
    {
        title: 'Dashboard',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="flaticon-381-networking" />,
        content: [            
            {
                title: 'Dashboard',
                to: 'dashboard',					
            },
            // {
            //     title: 'Event',
            //     to: 'event',					
            // },
            // {
            //     title: 'Event Detail',
            //     to: 'event-detail',
            // },
            // {
            //     title: 'Customers',
            //     to: 'customers',
            // },
            // {
            //     title: 'Analytics',
            //     to: 'analytics',
            // },
            // {
            //     title: 'Reviews',
            //     to: 'reviews',
            // },
            // {
            //     title: 'Task',
            //     to: 'task',                
            // },
        ],
    },
   
    
    //Apps
    {
        title: 'Registered',	
        classsChange: 'mm-collapse',
        iconStyle:  <i className="flaticon-381-television" />,
        content: [
            {
                title:'Create User',
                to: 'form-element',
            },
            {
                title: 'Super Admins',
                to: 'table-sorting'
            },
          
            {
                title: 'Admins',
                to: 'table-sorting'
            },
            {
                title: 'Users',
                to: 'table-sorting',
                hasMenu : true,
                // content: [
                //     {
                //         title: 'Compose',
                //         to: 'email-compose',
                //     },
                //     {
                //         title: 'Index',
                //         to: 'email-inbox',
                //     },
                //     {
                //         title: 'Read',
                //         to: 'email-read',
                //     }
                // ],
            },

            // {
            //     title:'Calendar',
            //     to: 'app-calender'
            // },

        ],
    },
    {
        title: 'Payments',	
        classsChange: 'mm-collapse',
        iconStyle:  <i className="flaticon-381-television" />,
        content: [
            {
                title:'All Platforms',
                to: 'chart-sparkline',
            }
            ,

            {
                title:'Calendar',
                to: 'app-calender'
            },

        ],
    },
    //Charts
    // {
    //     title: 'Charts',	
    //     classsChange: 'mm-collapse',
    //     iconStyle: <i className="flaticon-381-controls-3" />,
    //     content: [
            
    //         {
    //             title: 'RechartJs',
    //             to: 'chart-rechart',					
    //         },
    //         {
    //             title: 'Chartjs',
    //             to: 'chart-chartjs',					
    //         },
    //         {
    //             title: 'Sparkline',
    //             to: 'chart-sparkline',					
    //         },
    //         {
    //             title: 'Apexchart',
    //             to: 'chart-apexchart',					
    //         },
    //     ]
    // },
    //Boosttrap
    // {
    //     title: 'Bootstrap',	
    //     classsChange: 'mm-collapse',
    //     iconStyle: <i className="flaticon-381-internet" />,	
    //     content: [
    //         {
    //             title: 'Accordion',
    //             to: 'ui-accordion',					
    //         },
    //         {
    //             title: 'Alert',
    //             to: 'ui-alert',					
    //         },
    //         {
    //             title: 'Badge',
    //             to: 'ui-badge',					
    //         },
    //         {
    //             title: 'Button',
    //             to: 'ui-button',					
    //         },
    //         {
    //             title: 'Modal',
    //             to: 'ui-modal',					
    //         },
    //         {
    //             title: 'Button Group',
    //             to: 'ui-button-group',					
    //         },
    //         {
    //             title: 'List Group',
    //             to: 'ui-list-group',					
    //         },
    //         {
    //             title: 'Cards',
    //             to: 'ui-card',					
    //         },
    //         {
    //             title: 'Carousel',
    //             to: 'ui-carousel',					
    //         },
    //         {
    //             title: 'Dropdown',
    //             to: 'ui-dropdown',					
    //         },
    //         {
    //             title: 'Popover',
    //             to: 'ui-popover',					
    //         },
    //         {
    //             title: 'Progressbar',
    //             to: 'ui-progressbar',					
    //         },
    //         {
    //             title: 'Tab',
    //             to: 'ui-tab',					
    //         },
    //         {
    //             title: 'Typography',
    //             to: 'ui-typography',					
    //         },
    //         {
    //             title: 'Pagination',
    //             to: 'ui-pagination',					
    //         },
    //         {
    //             title: 'Grid',
    //             to: 'ui-grid',					
    //         },
    //     ]
    // },



    //plugins

    // 
    


    //Widget



    // {   
    //     title:'Widget',
    //     iconStyle: <i className="flaticon-381-settings-2" />,
    //     to: 'widget-basic',
    // },




    // Forms
    // {
    //     title:'Create User',
    //     classsChange: 'mm-collapse',
    //     iconStyle: <i className="flaticon-381-notepad" />,
    //     content : [
    //         {
    //             title:'Form Elements',
    //             to: 'form-element',
    //         },
    //         {
    //             title:'Wizard',
    //             to: 'form-wizard',
    //         },
    //         {
    //             title:'CkEditor',
    //             to: 'form-ckeditor',
    //         },
    //         {
    //             title:'Pickers',
    //             to: 'form-pickers',
    //         },
    //         {
    //             title:'Form Validate',
    //             to: 'form-validation',
    //         },

    //     ]
    // },



    //Table
    // {
    //     title:'Table',
    //     classsChange: 'mm-collapse',
    //     iconStyle: <i className="flaticon-381-network" />,
    //     content : [
    //         {
    //             title:'Table Filtering',
    //             to: 'table-filtering',
    //         },
    //         {
    //             title:'Table Sorting',
    //             to: 'table-sorting',
    //         },
    //         {
    //             title:'Bootstrap',
    //             to: 'table-bootstrap-basic',
    //         },
           

    //     ]
    // },




    //Pages

    // {
    //     title:'Pages',
    //     classsChange: 'mm-collapse',
    //     iconStyle: <i className="flaticon-381-layer-1" />,
    //     content : [
    //         {
    //             title:'Error',
    //             hasMenu : true,
    //             content : [
    //                 {
    //                     title: 'Error 400',
    //                     to : 'page-error-400',
    //                 },
    //                 {
    //                     title: 'Error 403',
    //                     to : 'page-error-403',
    //                 },
    //                 {
    //                     title: 'Error 404',
    //                     to : 'page-error-404',
    //                 },
    //                 {
    //                     title: 'Error 500',
    //                     to : 'page-error-500',
    //                 },
    //                 {
    //                     title: 'Error 503',
    //                     to : 'page-error-503',
    //                 },
    //             ],
    //         },
    //         {
    //             title:'Lock Screen',
    //             to: 'page-lock-screen',
    //         },

    //     ]
    // },
    
]