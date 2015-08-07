# oc-react-components
Base components for building an ownCloud app with reactjs

The `oc-react-components` package provides some of the basic building blocks for building a UI for an ownCloud app: The main container element, a side navigation bar, a controlbar and the content container.

For an example usage see https://github.com/icewind1991/react_oc_boilerplate

### `<App/>`

The `<App/>`  component creates the main container element for app

```
<App appId="my_app">
    ...
</App>
```

### `<ControlBar/>`

The `<ControlBar/>` component creates the bar on the top of the screen where the controls for the app are placed.

![controlbar](https://i.imgur.com/auuNYAH.png)

```
<App appId="my_app">
    ...
    
    <ControlBar>
        ...
    </ControlBar>
    
    ...
</App>
```

### `<SideBar/>`

The `<SideBar/>` component creates the navigation bar on side of the screen.

![sidebar](https://i.imgur.com/JWqPJFF.png)

The `<SideBar/>` component also comes with the `<Entry/>` and `<Seperator/>` component to be used to create the navigation entries in the sidebar.


```
<App appId="my_app">
    <SideBar>
        <Entry>
            ...
        </Entry>
        <Entry>
            ...
        </Entry>
        <Seperator/>
        <Entry>
            ...
        </Entry>
        ...
    </SideBar>

    ...
    
    ...
</App>
```

### `<Content/>`

The `<Content/>` component main content container of the app, when a controlbar is used the content component will correctly adjust the styling to make room for the control bar on the top of the screen.

![content](https://i.imgur.com/Vo2C8kT.pngg)

```
<App appId="my_app">
    ...

    ...
    
    <Content>
        ...
    </Content>
</App>
```

