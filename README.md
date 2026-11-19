# Lab 8 : Afficher et styliser des images dans une application React Native

- **URL de la plateforme** : https://mliaedu.toubkalit.com/student/courses/38/labs/268
- **Formation** : React Native

---

## 1. Objectif
Afficher un **logo local** dans l’écran d’accueil (`WelcomeScreen`) en utilisant le composant `Image`, puis appliquer un **style** (taille, bord arrondi) et une mise en page simple, avec une palette de couleurs imposée (`#EE9972`, `#EDEFEE`, noir, blanc).

---

## 2. Pré-requis
- Projet React Native déjà créé (Expo ou React Native CLI).
- Un écran `WelcomeScreen` existe déjà.
- Un fichier image PNG pour le logo (ex: `img/logo.png`).

---

## 3. Structure des fichiers
```text
tp8/
  img/
    logo.png
  components/
    WelcomeScreen.js
  App.js
  package.json
```

---

## 4. Étape 1 — Importer le logo (image locale)
1. Créer le dossier `img/` à la racine.
2. Ajouter le logo `img/logo.png`.

---

## 5. Étape 2 & 3 — Composant WelcomeScreen
**Fichier : `components/WelcomeScreen.js`**
```javascript
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.logo}
          source={require('../img/logo.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="Logo de l'application"
        />
        <Text style={styles.headerText}>AppName</Text>
      </View>

      <Text style={styles.subtitle}>
        Welcome to our Mediterranean Bistro
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EE9972',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 16,
    color: 'black',
  },
});
```

---

## 6. Étape 4 — Intégration dans App.js
**Fichier : `App.js`**
```javascript
import * as React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
});
```
