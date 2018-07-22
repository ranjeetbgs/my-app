import React from 'react';
const Menu =()=>(
<ul className="page-sidebar-menu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
				<li className="sidebar-toggler-wrapper">
					<div className="sidebar-toggler">
					</div>
					
				</li>
				
				<li className="sidebar-search-wrapper">
					
					<form className="sidebar-search " action="extra_search.html" method="POST">
						<a href={null} className="remove">
						<i className="icon-close"></i>
						</a>
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Search..." />
							<span className="input-group-btn">
							<a href={null} className="btn submit"><i className="icon-magnifier"></i></a>
							</span>
						</div>
					</form>
					
				</li>
				<li className="start active open">
					<a href={null}>
					<i className="icon-home"></i>
					<span className="title">Dashboard</span>
					<span className="selected"></span>
					<span className="arrow open"></span>
					</a>
					<ul className="sub-menu">
						<li className="active">
							<a href="index.html">
							<i className="icon-bar-chart"></i>
							Default Dashboard</a>
						</li>
						<li>
							<a href="index_2.html">
							<i className="icon-bulb"></i>
							New Dashboard #1</a>
						</li>
						<li>
							<a href="index_3.html">
							<i className="icon-graph"></i>
							New Dashboard #2</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-basket"></i>
					<span className="title">eCommerce</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="ecommerce_index.html">
							<i className="icon-home"></i>
							Dashboard</a>
						</li>
						<li>
							<a href="ecommerce_orders.html">
							<i className="icon-basket"></i>
							Orders</a>
						</li>
						<li>
							<a href="ecommerce_orders_view.html">
							<i className="icon-tag"></i>
							Order View</a>
						</li>
						<li>
							<a href="ecommerce_products.html">
							<i className="icon-handbag"></i>
							Products</a>
						</li>
						<li>
							<a href="ecommerce_products_edit.html">
							<i className="icon-pencil"></i>
							Product Edit</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-rocket"></i>
					<span className="title">Page Layouts</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="layout_horizontal_sidebar_menu.html">
							Horizontal Sidebar Menu</a>
						</li>
						<li>
							<a href="index_horizontal_menu.html">
							Dashboard Mega Menu</a>
						</li>
						<li>
							<a href="layout_horizontal_menu1.html">
							Horizontal Mega Menu 1</a>
						</li>
						<li>
							<a href="layout_horizontal_menu2.html">
							Horizontal Mega Menu 2</a>
						</li>
						<li>
							<a href="layout_fontawesome_icons.html">
							<span className="badge badge-roundless badge-danger">new</span>Layout with Fontawesome Icons</a>
						</li>
						<li>
							<a href="layout_glyphicons.html">
							Layout with Glyphicon</a>
						</li>
						<li>
							<a href="layout_full_height_portlet.html">
							<span className="badge badge-roundless badge-success">new</span>Full Height Portlet</a>
						</li>
						<li>
							<a href="layout_full_height_content.html">
							<span className="badge badge-roundless badge-warning">new</span>Full Height Content</a>
						</li>
						<li>
							<a href="layout_search_on_header1.html">
							Search Box On Header 1</a>
						</li>
						<li>
							<a href="layout_search_on_header2.html">
							Search Box On Header 2</a>
						</li>
						<li>
							<a href="layout_sidebar_search_option1.html">
							Sidebar Search Option 1</a>
						</li>
						<li>
							<a href="layout_sidebar_search_option2.html">
							Sidebar Search Option 2</a>
						</li>
						<li>
							<a href="layout_sidebar_reversed.html">
							<span className="badge badge-roundless badge-warning">new</span>Right Sidebar Page</a>
						</li>
						<li>
							<a href="layout_sidebar_fixed.html">
							Sidebar Fixed Page</a>
						</li>
						<li>
							<a href="layout_sidebar_closed.html">
							Sidebar Closed Page</a>
						</li>
						<li>
							<a href="layout_ajax.html">
							Content Loading via Ajax</a>
						</li>
						<li>
							<a href="layout_disabled_menu.html">
							Disabled Menu Links</a>
						</li>
						<li>
							<a href="layout_blank_page.html">
							Blank Page</a>
						</li>
						<li>
							<a href="layout_boxed_page.html">
							Boxed Page</a>
						</li>
						<li>
							<a href="layout_language_bar.html">
							Language Switch Bar</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-diamond"></i>
					<span className="title">UI Features</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="ui_general.html">
							General Components</a>
						</li>
						<li>
							<a href="ui_buttons.html">
							Buttons</a>
						</li>
						<li>
							<a href="ui_confirmations.html">
							Popover Confirmations</a>
						</li>
						<li>
							<a href="ui_icons.html">
							<span className="badge badge-roundless badge-danger">new</span>Font Icons</a>
						</li>
						<li>
							<a href="ui_colors.html">
							Flat UI Colors</a>
						</li>
						<li>
							<a href="ui_typography.html">
							Typography</a>
						</li>
						<li>
							<a href="ui_tabs_accordions_navs.html">
							Tabs, Accordions Navs</a>
						</li>
						<li>
							<a href="ui_tree.html">
							<span className="badge badge-roundless badge-danger">new</span>Tree View</a>
						</li>
						<li>
							<a href="ui_page_progress_style_1.html">
							<span className="badge badge-roundless badge-warning">new</span>Page Progress Bar</a>
						</li>
						<li>
							<a href="ui_blockui.html">
							Block UI</a>
						</li>
						<li>
							<a href="ui_bootstrap_growl.html">
							<span className="badge badge-roundless badge-warning">new</span>Bootstrap Growl Notifications</a>
						</li>
						<li>
							<a href="ui_notific8.html">
							Notific8 Notifications</a>
						</li>
						<li>
							<a href="ui_toastr.html">
							Toastr Notifications</a>
						</li>
						<li>
							<a href="ui_alert_dialog_api.html">
							<span className="badge badge-roundless badge-danger">new</span>Alerts Dialogs API</a>
						</li>
						<li>
							<a href="ui_session_timeout.html">
							Session Timeout</a>
						</li>
						<li>
							<a href="ui_idle_timeout.html">
							User Idle Timeout</a>
						</li>
						<li>
							<a href="ui_modals.html">
							Modals</a>
						</li>
						<li>
							<a href="ui_extended_modals.html">
							Extended Modals</a>
						</li>
						<li>
							<a href="ui_tiles.html">
							Tiles</a>
						</li>
						<li>
							<a href="ui_datepaginator.html">
							<span className="badge badge-roundless badge-success">new</span>Date Paginator</a>
						</li>
						<li>
							<a href="ui_nestable.html">
							Nestable List</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-puzzle"></i>
					<span className="title">UI Components</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="components_pickers.html">
							Date Time Pickers</a>
						</li>
						<li>
							<a href="components_context_menu.html">
							Context Menu</a>
						</li>
						<li>
							<a href="components_dropdowns.html">
							Custom Dropdowns</a>
						</li>
						<li>
							<a href="components_form_tools.html">
							Form Widgets Tools</a>
						</li>
						<li>
							<a href="components_form_tools2.html">
							Form Widgets Tools 2</a>
						</li>
						<li>
							<a href="components_editors.html">
							Markdown WYSIWYG Editors</a>
						</li>
						<li>
							<a href="components_ion_sliders.html">
							Ion Range Sliders</a>
						</li>
						<li>
							<a href="components_noui_sliders.html">
							NoUI Range Sliders</a>
						</li>
						<li>
							<a href="components_jqueryui_sliders.html">
							jQuery UI Sliders</a>
						</li>
						<li>
							<a href="components_knob_dials.html">
							Knob Circle Dials</a>
						</li>
					</ul>
				</li>
				
				<li className="tooltips" data-container="body" data-placement="right" data-html="true" data-original-title="AngularJS version demo">
					<a href="angularjs" target="_blank">
					<i className="icon-paper-plane"></i>
					<span className="title">
					AngularJS Version </span>
					</a>
				</li>
				
				<li className="heading">
					<h3 className="uppercase">Features</h3>
				</li>
				<li>
					<a href={null}>
					<i className="icon-settings"></i>
					<span className="title">Form Stuff</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="form_controls_md.html">
							<span className="badge badge-roundless badge-danger">new</span>Material Design<br/>
							Form Controls</a>
						</li>
						<li>
							<a href="form_controls.html">
							Bootstrap<br/>
							Form Controls</a>
						</li>
						<li>
							<a href="form_icheck.html">
							iCheck Controls</a>
						</li>
						<li>
							<a href="form_layouts.html">
							Form Layouts</a>
						</li>
						<li>
							<a href="form_editable.html">
							<span className="badge badge-roundless badge-warning">new</span>Form X-editable</a>
						</li>
						<li>
							<a href="form_wizard.html">
							Form Wizard</a>
						</li>
						<li>
							<a href="form_validation.html">
							Form Validation</a>
						</li>
						<li>
							<a href="form_image_crop.html">
							<span className="badge badge-roundless badge-danger">new</span>Image Cropping</a>
						</li>
						<li>
							<a href="form_fileupload.html">
							Multiple File Upload</a>
						</li>
						<li>
							<a href="form_dropzone.html">
							Dropzone File Upload</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-briefcase"></i>
					<span className="title">Data Tables</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="table_basic.html">
							Basic Datatables</a>
						</li>
						<li>
							<a href="table_tree.html">
							Tree Datatables</a>
						</li>
						<li>
							<a href="table_responsive.html">
							Responsive Datatables</a>
						</li>
						<li>
							<a href="table_managed.html">
							Managed Datatables</a>
						</li>
						<li>
							<a href="table_editable.html">
							Editable Datatables</a>
						</li>
						<li>
							<a href="table_advanced.html">
							Advanced Datatables</a>
						</li>
						<li>
							<a href="table_ajax.html">
							Ajax Datatables</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-wallet"></i>
					<span className="title">Portlets</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="portlet_general.html">
							General Portlets</a>
						</li>
						<li>
							<a href="portlet_general2.html">
							<span className="badge badge-roundless badge-danger">new</span>New Portlets #1</a>
						</li>
						<li>
							<a href="portlet_general3.html">
							<span className="badge badge-roundless badge-danger">new</span>New Portlets #2</a>
						</li>
						<li>
							<a href="portlet_ajax.html">
							Ajax Portlets</a>
						</li>
						<li>
							<a href="portlet_draggable.html">
							Draggable Portlets</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-bar-chart"></i>
					<span className="title">Charts</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="charts_amcharts.html">
							amChart</a>
						</li>
						<li>
							<a href="charts_flotcharts.html">
							Flotchart</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-docs"></i>
					<span className="title">Pages</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="page_timeline.html">
							<i className="icon-paper-plane"></i>
							<span className="badge badge-warning">2</span>New Timeline</a>
						</li>
						<li>
							<a href="extra_profile.html">
							<i className="icon-user-following"></i>
							<span className="badge badge-success badge-roundless">new</span>New User Profile</a>
						</li>
						<li>
							<a href="page_todo.html">
							<i className="icon-check"></i>
							Todo</a>
						</li>
						<li>
							<a href="inbox.html">
							<i className="icon-envelope"></i>
							<span className="badge badge-danger">4</span>Inbox</a>
						</li>
						<li>
							<a href="extra_faq.html">
							<i className="icon-question"></i>
							FAQ</a>
						</li>
						<li>
							<a href="page_calendar.html">
							<i className="icon-calendar"></i>
							<span className="badge badge-danger">14</span>Calendar</a>
						</li>
						<li>
							<a href="page_coming_soon.html">
							<i className="icon-flag"></i>
							Coming Soon</a>
						</li>
						<li>
							<a href="page_blog.html">
							<i className="icon-speech"></i>
							Blog</a>
						</li>
						<li>
							<a href="page_blog_item.html">
							<i className="icon-link"></i>
							Blog Post</a>
						</li>
						<li>
							<a href="page_news.html">
							<i className="icon-eye"></i>
							<span className="badge badge-success">9</span>News</a>
						</li>
						<li>
							<a href="page_news_item.html">
							<i className="icon-bell"></i>
							News View</a>
						</li>
						<li>
							<a href="page_timeline_old.html">
							<i className="icon-paper-plane"></i>
							<span className="badge badge-warning">2</span>Old Timeline</a>
						</li>
						<li>
							<a href="extra_profile_old.html">
							<i className="icon-user"></i>
							Old User Profile</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-present"></i>
					<span className="title">Extra</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="page_about.html">
							About Us</a>
						</li>
						<li>
							<a href="page_contact.html">
							Contact Us</a>
						</li>
						<li>
							<a href="extra_search.html">
							Search Results</a>
						</li>
						<li>
							<a href="extra_invoice.html">
							Invoice</a>
						</li>
						<li>
							<a href="page_portfolio.html">
							Portfolio</a>
						</li>
						<li>
							<a href="extra_pricing_table.html">
							Pricing Tables</a>
						</li>
						<li>
							<a href="extra_404_option1.html">
							404 Page Option 1</a>
						</li>
						<li>
							<a href="extra_404_option2.html">
							404 Page Option 2</a>
						</li>
						<li>
							<a href="extra_404_option3.html">
							404 Page Option 3</a>
						</li>
						<li>
							<a href="extra_500_option1.html">
							500 Page Option 1</a>
						</li>
						<li>
							<a href="extra_500_option2.html">
							500 Page Option 2</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-folder"></i>
					<span className="title">Multi Level Menu</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href={null}>
							<i className="icon-settings"></i> Item 1 <span className="arrow"></span>
							</a>
							<ul className="sub-menu">
								<li>
									<a href={null}>
									<i className="icon-user"></i>
									Sample Link 1 <span className="arrow"></span>
									</a>
									<ul className="sub-menu">
										<li>
											<a href={null}><i className="icon-power"></i> Sample Link 1</a>
										</li>
										<li>
											<a href={null}><i className="icon-paper-plane"></i> Sample Link 1</a>
										</li>
										<li>
											<a href={null}><i className="icon-star"></i> Sample Link 1</a>
										</li>
									</ul>
								</li>
								<li>
									<a href={null}><i className="icon-camera"></i> Sample Link 1</a>
								</li>
								<li>
									<a href={null}><i className="icon-link"></i> Sample Link 2</a>
								</li>
								<li>
									<a href={null}><i className="icon-pointer"></i> Sample Link 3</a>
								</li>
							</ul>
						</li>
						<li>
							<a href={null}>
							<i className="icon-globe"></i> Item 2 <span className="arrow"></span>
							</a>
							<ul className="sub-menu">
								<li>
									<a href={null}><i className="icon-tag"></i> Sample Link 1</a>
								</li>
								<li>
									<a href={null}><i className="icon-pencil"></i> Sample Link 1</a>
								</li>
								<li>
									<a href={null}><i className="icon-graph"></i> Sample Link 1</a>
								</li>
							</ul>
						</li>
						<li>
							<a href={null}>
							<i className="icon-bar-chart"></i>
							Item 3 </a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-user"></i>
					<span className="title">Login Options</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="login.html">
							Login Form 1</a>
						</li>
						<li>
							<a href="login_2.html">
							Login Form 2</a>
						</li>
						<li>
							<a href="login_3.html">
							Login Form 3</a>
						</li>
						<li>
							<a href="login_soft.html">
							Login Form 4</a>
						</li>
						<li>
							<a href="extra_lock.html">
							Lock Screen 1</a>
						</li>
						<li>
							<a href="extra_lock2.html">
							Lock Screen 2</a>
						</li>
					</ul>
				</li>
				<li className="heading">
					<h3 className="uppercase">More</h3>
				</li>
				<li>
					<a href={null}>
					<i className="icon-logout"></i>
					<span className="title">Quick Sidebar</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="quick_sidebar_push_content.html">
							Push Content</a>
						</li>
						<li>
							<a href="quick_sidebar_over_content.html">
							Over Content</a>
						</li>
						<li>
							<a href="quick_sidebar_over_content_transparent.html">
							Over Content Transparent</a>
						</li>
						<li>
							<a href="quick_sidebar_on_boxed_layout.html">
							Boxed Layout</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={null}>
					<i className="icon-envelope-open"></i>
					<span className="title">Email Templates</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="email_template1.html">
							New Email Template 1</a>
						</li>
						<li>
							<a href="email_template2.html">
							New Email Template 2</a>
						</li>
						<li>
							<a href="email_template3.html">
							New Email Template 3</a>
						</li>
						<li>
							<a href="email_template4.html">
							New Email Template 4</a>
						</li>
						<li>
							<a href="email_newsletter.html">
							Old Email Template 1</a>
						</li>
						<li>
							<a href="email_system.html">
							Old Email Template 2</a>
						</li>
					</ul>
				</li>
				<li className="last ">
					<a href={null}>
					<i className="icon-pointer"></i>
					<span className="title">Maps</span>
					<span className="arrow "></span>
					</a>
					<ul className="sub-menu">
						<li>
							<a href="maps_google.html">
							Google Maps</a>
						</li>
						<li>
							<a href="maps_vector.html">
							Vector Maps</a>
						</li>
					</ul>
				</li>
			</ul>

);
export default Menu;