/**
 * NativeDocument — Component Renderers
 * -------------------------------------
 * Uncomment the components you want to use in your project.
 * In VS Code: select lines and press Ctrl+/ to toggle comments.
 */

import {
    HStack, VStack, AbsoluteStack, FixedStack, RelativeStack,
    Spinner, Avatar, AvatarGroup, Badge, Divider, Skeleton, Progress,
    Button, Alert, Toast, Popover, Tooltip, Modal,
    Dropdown, DropdownItem, DropdownDivider, DropdownGroup,
    Breadcrumb, Tabs, Pagination, Stepper, StepperStep,
    Menu, MenuGroup, MenuItem, MenuLink, MenuDivider, ContextMenu,
    Splitter, SplitterPanel, SplitterGutter,
    Accordion, AccordionItem,
    Field, PasswordField, EmailField, TelField, UrlField, StringField,
    NumberField, TextAreaField, CheckboxField, CheckboxGroupField,
    RadioField, SelectField, AutocompleteField, HiddenField,
    ColorField, FileField, ImageField, DateField, TimeField,
    FileNativeMode, FileDropzoneMode, FileUploadButtonMode, FileWallMode, FileAvatarMode,
    Slider, RangeField, FieldCollection, FormControl,
    SimpleTable, DataTable, Switch, Card, List, ListItem, Spacer, ListGroup, Icon
} from 'native-document/components';

import {
    HStackRender, VStackRender, AbsoluteStackRender, FixedStackRender, RelativeStackRender,
    SpinnerRender, AvatarRender, AvatarGroupRender, BadgeRender, DividerRender,
    SkeletonRender, ProgressRender, ButtonRender, AlertRender, ToastRender,
    PopoverRender, TooltipRender, ModalRender,
    DropdownRender, DropdownItemRender, DropdownDividerRender, DropdownGroupRender,
    BreadcrumbRender, TabsRender, PaginationRender, StepperRender, StepperStepRender,
    MenuRender, MenuGroupRender, MenuItemRender, MenuLinkRender, MenuDividerRender,
    ContextMenuRender, contextMenuHandler,
    SplitterRender, SplitterPanelRender, SplitterGutterRender,
    AccordionRender, AccordionItemRender,
    FieldRender, PasswordFieldRender, EmailFieldRender, TelFieldRender, UrlFieldRender,
    StringFieldRender, NumberFieldRender, TextAreaFieldRender,
    CheckboxFieldRender, CheckboxGroupFieldRender, RadioFieldRender,
    SelectFieldRender, AutocompleteFieldRender, HiddenFieldRender,
    ColorFieldRender, FileFieldRender, FileNativeModeRender, FileDropzoneModeRender,
    FileUploadButtonModeRender, FileWallModeRender, FileAvatarModeRender,
    DateFieldRender, TimeFieldRender, SliderFieldRender, RangeFieldRender,
    FieldCollectionRender, FormControlRender, CardRender, ListRender, SpacerRender, ListGroupRender, ListItemRender,
    SimpleTableRender, DataTableRender, SwitchRender, TablerIconRender, MaterialIconRender
} from 'native-document/ui';


// ------------------------------------------
// Layout
// ------------------------------------------
// HStack.use(HStackRender);
// VStack.use(VStackRender);
// AbsoluteStack.use(AbsoluteStackRender);
// FixedStack.use(FixedStackRender);
// RelativeStack.use(RelativeStackRender);
// Spacer.use(SpacerRender);


// ------------------------------------------
// Feedback
// ------------------------------------------
// Spinner.use(SpinnerRender);
// Alert.use(AlertRender);
// Toast.use(ToastRender);
// Progress.use(ProgressRender);
// Skeleton.use(SkeletonRender);


// ------------------------------------------
// Base Components
// ------------------------------------------
// Button.use(ButtonRender);
// Badge.use(BadgeRender);
// Avatar.use(AvatarRender);
// AvatarGroup.use(AvatarGroupRender);
// Divider.use(DividerRender);


// ------------------------------------------
// Overlays
// ------------------------------------------
// Modal.use(ModalRender);
// Popover.use(PopoverRender);
// Tooltip.use(TooltipRender);


// ------------------------------------------
// Dropdown
// ------------------------------------------
// Dropdown.use(DropdownRender);
// DropdownItem.use(DropdownItemRender);
// DropdownDivider.use(DropdownDividerRender);
// DropdownGroup.use(DropdownGroupRender);


// ------------------------------------------
// Navigation
// ------------------------------------------
// Breadcrumb.use(BreadcrumbRender);
// Tabs.use(TabsRender);
// Pagination.use(PaginationRender);
// Stepper.use(StepperRender);
// StepperStep.use(StepperStepRender);


// ------------------------------------------
// Menu
// ------------------------------------------
// Menu.use(MenuRender);
// MenuGroup.use(MenuGroupRender);
// MenuItem.use(MenuItemRender);
// MenuLink.use(MenuLinkRender);
// MenuDivider.use(MenuDividerRender);
// ContextMenu.use(ContextMenuRender, contextMenuHandler);


// ------------------------------------------
// Layout Advanced
// ------------------------------------------
// Splitter.use(SplitterRender);
// SplitterPanel.use(SplitterPanelRender);
// SplitterGutter.use(SplitterGutterRender);
// Accordion.use(AccordionRender);
// AccordionItem.use(AccordionItemRender);


// ------------------------------------------
// Form Fields
// ------------------------------------------
// Field.use(FieldRender);
// StringField.use(StringFieldRender);
// NumberField.use(NumberFieldRender);
// PasswordField.use(PasswordFieldRender);
// EmailField.use(EmailFieldRender);
// TelField.use(TelFieldRender);
// UrlField.use(UrlFieldRender);
// TextAreaField.use(TextAreaFieldRender);
// CheckboxField.use(CheckboxFieldRender);
// CheckboxGroupField.use(CheckboxGroupFieldRender);
// RadioField.use(RadioFieldRender);
// SelectField.use(SelectFieldRender);
// AutocompleteField.use(AutocompleteFieldRender);
// HiddenField.use(HiddenFieldRender);
// ColorField.use(ColorFieldRender);
// DateField.use(DateFieldRender);
// TimeField.use(TimeFieldRender);
// Slider.use(SliderFieldRender);
// RangeField.use(RangeFieldRender);


// ------------------------------------------
// File Upload
// ------------------------------------------
// FileField.use(FileFieldRender);
// FileNativeMode.use(FileNativeModeRender);
// FileDropzoneMode.use(FileDropzoneModeRender);
// FileUploadButtonMode.use(FileUploadButtonModeRender);
// FileWallMode.use(FileWallModeRender);
// FileAvatarMode.use(FileAvatarModeRender);


// ------------------------------------------
// Form Control & Collections
// ------------------------------------------
// FieldCollection.use(FieldCollectionRender);
// FormControl.use(FormControlRender);


// ------------------------------------------
// Data Display
// ------------------------------------------
// SimpleTable.use(SimpleTableRender);
// DataTable.use(DataTableRender);


// ------------------------------------------
// Misc
// ------------------------------------------
// Switch.use(SwitchRender);


// ------------------------------------------
// Card
// ------------------------------------------
// Card.use(CardRender);


// ------------------------------------------
// List
// ------------------------------------------
// List.use(ListRender);
// ListItem.use(ListItemRender);
// ListGroup.use(ListGroupRender);

// ------------------------------------------
// Icon
// ------------------------------------------
// Icon.use(MaterialIconRender);