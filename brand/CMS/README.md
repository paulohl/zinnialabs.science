# Enable Reader Revenue Manager on WordPress

## Get started
This guide shows how to set up your Reader Revenue Manager Integration in WordPress. To set up Reader Revenue Manager, complete all of the onboarding steps in Publisher Center.

Learn more about how to set up Reader Revenue Manager on Site Kit.

Integrating through Site Kit is our recommended solution for WordPress users. If you're unable to use Site Kit, you can install a third party plugin WPCode and follow the instructions below.

## For non-Site-Kit users: Add a code snippet to your publication
1. Open your __WordPress Admin__.
2. On the left, under “Plugins,” click __Add New__.
3. On the search bar, enter WPCode.
       . You can find the “WPCode – Insert Headers and Footers + Custom Code Snippets – WordPress Code Manager” plugin.
4. To install this plugin, click Install Now.
5. Once you install the plugin, to add a snippet:

       a. On the left, under “Code Snippets,” click Add snippet and then Add your Custom Code.
       b. Add a title you want to use for your snippet.
       c, Copy the Reader Revenue Manager code snippet.
       d. Paste the Reader Revenue Manager code snippet from the “CMS Sync” tab in Google Publisher Center.
6. Turn on __Active__.
7. Set “Code type” to “HTML Snippet.”
        
        * __Insertion method__: “Auto Insert”
        *__Location__: “Site Wide Header”
        * __Priority__: “10” to “1"
8. At the top right, click __Save snippet__.

## Check Accelerated Mobile Pages compatibility

If your entire site is built on Accelerated Mobile Pages (AMP), you should not use Reader Revenue Manager.

       . If you use Newspack, you can configure AMP.
       . By default, AMP blocks the “Reader Revenue Manager” code snippets since it isn’t valid AMP.
       . You can add the “Reader Revenue Manager” code snippet to your canonical pages and disable AMP if:
              . You have both AMP and non-AMP pages.

## Use Allow-List to your code snippet within AMP
1. On {site or location}, open an article with a broken pop-up in edit mode.
2. To trigger an AMP error, click __Revalidate__.
3. To show the article URL, in the AMP plugin, open validated URLs you want to use.
4. To see a list of what AMP kept or removed, click __Details__.
5. Select “code snippets” lines you want to allow.
6. From the drop-down, change the value from “Removed” to “Kept.”
7. Click __Save__.     

__Note__: On the page that results in an invalid AMP page, you keep a custom javascript code.

Turn off Accelerated Mobile Pages
On the search bar of the “Plugins” page, Enter “AMP.”
Check the box next to AMP.
Under “bulk actions,” select Deactivate.
To remove your AMP pages from Google Search, learn how to remove AMP pages.

Give feedback about this article
