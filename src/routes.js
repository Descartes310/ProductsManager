import ListScreen from './screens/list/List.screen';
import AddScreen from './screens/add/Add.screen';
import SettingsScreen from './screens/settings/Settings.screen';
import ShareScreen from './screens/share/Share.screen';


export default [
    {
        name: 'List',
        title: 'Liste des produits',
        screen: ListScreen,
        icon: 'product-hunt',
    },
    {
        name: 'Add',
        title: 'Ajouter un produit',
        screen: AddScreen,
        icon: 'plus'
    }, 
    {
        name: 'Share',
        title: 'Partager les produits',
        screen: ShareScreen,
        icon: 'share-alt'
    }, 
    {
        name: 'Settings',
        title: 'Paramètres',
        screen: SettingsScreen,
        icon: 'gear'
    }
];